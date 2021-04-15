import { Controller, Get, Inject } from '@nestjs/common';
import { LoggerService } from './logger-module/logger.service';

@Controller()
export class AppController {
  constructor(
    @Inject(LoggerService)
    private readonly service: LoggerService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    this.service.log('I was injected from root');
    return JSON.stringify(this.service);
  }
}
