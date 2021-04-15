import { Controller, Get } from '@nestjs/common';
import { Neo4jService } from 'nest-neo4j/dist';

@Controller()
export class AppController {
  constructor(private readonly service: Neo4jService) {}

  @Get()
  async getHello(): Promise<string> {
    return 'Running';
  }
}
