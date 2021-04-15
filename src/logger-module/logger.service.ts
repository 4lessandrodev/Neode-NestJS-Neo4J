import { Inject, Injectable, Logger } from '@nestjs/common';

interface ConfigInterface {
  context: string;
}

@Injectable()
export class LoggerService {
  protected readonly logger: Logger;
  constructor(@Inject('CONFIG') protected readonly option: ConfigInterface) {
    this.logger = new Logger(option.context, true);
  }

  log(message: string): void {
    this.logger.log(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }
}
