import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import userModel from 'src/entities/user.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([userModel])],
  providers: [AuthService,UsersService],
  controllers: [AuthController]
})
export class AuthModule { }
