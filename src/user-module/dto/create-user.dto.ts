import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export class CreateUserDto implements Partial<UserInterface> {
  // This is defined on service before save
  id?: string;
  isFirstAuth?: boolean;

  @IsNotEmpty()
  avatar!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}
