import { Module } from '@nestjs/common';
import { NeodeModule } from 'neode-nestjs/dist';
import { LoggerModule } from './logger-module/logger.module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [LoggerModule.forRoot('Root'), NeodeModule.forRoot(), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
