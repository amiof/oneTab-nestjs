import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import userModel from 'src/entities/user.entities';

@Module({
  imports: [TypeOrmModule.forFeature([userModel])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
