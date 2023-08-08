import { Module } from '@nestjs/common';
import { HeadersController } from './headers.controller';
import { HeadersService } from './headers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { headerModle } from 'src/entities/header.entities';
import { UsersModule } from 'src/users/users.module';
import { UrlsModule } from 'src/urls/urls.module';

@Module({
  imports: [TypeOrmModule.forFeature([headerModle]),UsersModule,UrlsModule],
  controllers: [HeadersController],
  providers: [HeadersService]
})
export class HeadersModule { }
