import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { databasePorvider } from './database.provider';
import { PassportModule } from "@nestjs/passport"
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [UsersModule, ...databasePorvider,PassportModule, AuthModule, UrlsModule],
})
export class AppModule implements NestModule{
configure(consumer: MiddlewareConsumer) {
  consumer.apply(LoggerMiddleware).forRoutes("*")
}
}
