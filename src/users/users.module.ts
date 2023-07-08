import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import userModel from 'src/entities/user.entities';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([userModel])],
  controllers: [UsersController],
  providers: [UsersService,jwtStrategy]

})
export class UsersModule {}
