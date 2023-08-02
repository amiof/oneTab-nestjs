import { Module } from '@nestjs/common';
import { FavUrlsController } from './fav-urls.controller';
import { FavUrlsService } from './fav-urls.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { favUlrsModle } from 'src/entities/fav.entities';
import { UrlsModule } from 'src/urls/urls.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([favUlrsModle]),UrlsModule,UsersModule],
  controllers: [FavUrlsController],
  providers: [FavUrlsService]
})
export class FavUrlsModule {}
