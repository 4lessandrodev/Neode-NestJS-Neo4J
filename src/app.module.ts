import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerModule } from './logger-module/logger.module';
import { NeodeModule } from './neode-module/neode.module';

@Module({
  imports: [LoggerModule.forRoot('Root'), NeodeModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
