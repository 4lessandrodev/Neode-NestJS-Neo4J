import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NeodeModule } from './neode-module/neode.module';

@Module({
  imports: [NeodeModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
