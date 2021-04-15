import { Global, Module, DynamicModule, Logger } from '@nestjs/common';
import * as Neode from 'neode';

interface Config {
  [label: string]: Neode.SchemaObject;
}

@Global()
@Module({})
export class NeodeModule {
  /**
   *
   * @param directory schemas folder as path example: `src/infra/schemas`
   * @returns instance of Neode as connection
   */
  static forRoot(directory?: string): DynamicModule {
    return {
      module: NeodeModule,
      global: true,
      providers: [
        {
          provide: 'DIRECTORY',
          useValue: directory ?? null,
        },
        {
          provide: 'Connection',
          useFactory: async () => {
            let connection: Neode;
            if (typeof directory === 'string') {
              connection = await Neode.fromEnv().withDirectory(directory);

              // Why error if already installed?
              try {
                await connection.schema.install();
              } catch (error) {
                new Logger('NeodeModule', true).warn(
                  `Could not install schemas from directory ${directory}. Already installed?`,
                );
              }
            } else {
              connection = await Neode.fromEnv();
            }

            return connection;
          },
          inject: ['DIRECTORY'],
        },
      ],
      exports: ['Connection'],
    };
  }

  /**
   *
   * @param config key: as label name and value: Node definition as `SchemaObject`
   * example: `{ User: UserSchema }`
   * @returns Instance of Neode as connection for module
   */
  static forFeature(config: Config): DynamicModule {
    return {
      module: NeodeModule,
      global: false,
      providers: [
        {
          provide: 'CONFIG',
          useValue: config,
        },
        {
          provide: 'Connection',
          useFactory: async () => {
            const connection = await Neode.fromEnv().with(config);

            // Why error if already installed?
            try {
              await connection.schema.install();
            } catch (error) {
              new Logger('NeodeModule', true).error(
                `Could not install schema ${Object.keys(
                  config,
                )}. Already installed ?`,
              );
            }
            return connection;
          },
          inject: ['CONFIG'],
        },
      ],
      exports: ['Connection'],
    };
  }
}
