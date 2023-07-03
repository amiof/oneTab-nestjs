import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { databasePorvider } from './database.provider';
import { PassportModule } from "@nestjs/passport"
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ...databasePorvider,PassportModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
