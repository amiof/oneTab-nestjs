import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { databasePorvider } from './database.provider';

@Module({
  imports: [UsersModule, ...databasePorvider],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
