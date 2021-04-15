import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('v1/users')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post()
  createUser(@Body(ValidationPipe) dto: CreateUserDto): Promise<void> {
    return this.userService.createUser(dto);
  }

  @Get()
  getUsers(): Promise<UserInterface[]> {
    return this.userService.getUsers();
  }
}
