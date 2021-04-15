import { DynamicModule, Global, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Global()
@Module({})
export class LoggerModule {
  static forRoot(context: string): DynamicModule {
    return {
      module: LoggerModule,
      global: true,
      providers: [
        {
          provide: 'CONFIG',
          useValue: context,
        },
        {
          provide: LoggerService,
          useFactory: (context: string) => new LoggerService({ context }),
          inject: ['CONFIG'],
        },
      ],
      exports: [LoggerService],
    };
  }
}
