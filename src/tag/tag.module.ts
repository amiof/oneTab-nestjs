import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import tagModle from 'src/entities/tag.entities';
import { UsersModule } from 'src/users/users.module';
import { UrlsModule } from 'src/urls/urls.module';

@Module({
  imports:[TypeOrmModule.forFeature([tagModle]),UsersModule,UrlsModule],
  controllers: [TagController],
  providers: [TagService]

})
export class TagModule {}
