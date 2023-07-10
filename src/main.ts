import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import *  as passport from 'passport';
import * as Session from "express-session"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  const config = new DocumentBuilder().setTitle("api nestjs").setDescription("one-tabs api").setVersion("1.0").addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT',
    description: 'Enter JWT token',
    in: 'header',
  },
    'token').build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api-doc", app, document)
  app.use(Session({
    resave: false,
    saveUninitialized: true,
    secret: "secretkey"
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3000);
}
bootstrap();
