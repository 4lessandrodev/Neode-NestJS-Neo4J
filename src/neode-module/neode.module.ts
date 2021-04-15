import { DynamicModule, Module } from '@nestjs/common';
import Neode from 'neode';
import { UserSchema } from './user.schema';

@Module({})
export class NeodeModule {
  static forRoot(): DynamicModule {
    return {
      module: NeodeModule,
      global: true,
      providers: [
        {
          provide: Neode,
          useFactory: () => Neode.fromEnv().with({ User: UserSchema }),
        },
      ],
      exports: [
        {
          provide: Neode,
          useFactory: () => Neode.fromEnv(),
        },
      ],
    };
  }
}
