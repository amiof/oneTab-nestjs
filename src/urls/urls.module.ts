import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import urlModel from 'src/entities/urls.entities';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([urlModel]),UsersModule],
  providers: [UrlsService],
  controllers: [UrlsController],
  exports:[UrlsService]

})
export class UrlsModule {}
