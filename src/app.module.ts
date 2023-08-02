import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { databasePorvider } from './database.provider';
import { PassportModule } from "@nestjs/passport"
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UrlsModule } from './urls/urls.module';
import { TagModule } from './tag/tag.module';
import { FavUrlsModule } from './fav-urls/fav-urls.module';

@Module({
  imports: [UsersModule, ...databasePorvider,PassportModule, AuthModule, UrlsModule, TagModule, FavUrlsModule],
})
export class AppModule implements NestModule{
configure(consumer: MiddlewareConsumer) {
  consumer.apply(LoggerMiddleware).forRoutes("*")
}
}
