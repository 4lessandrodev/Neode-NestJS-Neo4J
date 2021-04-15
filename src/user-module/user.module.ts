import { Module } from '@nestjs/common';
import { NeodeModule } from '../neode-module/neode.module';
import UserSchema from '../neode-module/schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [NeodeModule.forFeature({ User: UserSchema })],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
