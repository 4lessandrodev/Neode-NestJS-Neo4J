import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from '../logger-module/logger.service';
import Neode from 'neode';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @Inject(LoggerService) private readonly logger: LoggerService,
    @Inject('Connection') private readonly neode: Neode,
  ) {}

  async createUser(dto: CreateUserDto): Promise<void> {
    this.logger.log('Create User');
    dto.id = uuid();
    dto.isFirstAuth = true;

    await this.neode.merge('User', dto);
    this.logger.log('User has been created');
  }

  async getUsers(): Promise<UserInterface[]> {
    this.logger.log('Get Users');
    const user = await this.neode.all('User');
    return (await user.toJson()) as UserInterface[];
  }
}
