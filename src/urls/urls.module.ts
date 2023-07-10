import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import urlModel from 'src/entities/urls.entities';
import { UsersService } from 'src/users/users.service';
import userModel from 'src/entities/user.entities';

@Module({
  imports:[TypeOrmModule.forFeature([urlModel,userModel])],
  providers: [UrlsService,UsersService],
  controllers: [UrlsController]
})
export class UrlsModule {}
