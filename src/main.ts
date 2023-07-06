import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  const config = new DocumentBuilder().setTitle("api nestjs").setDescription("one-tabs api").setVersion("1.0").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api-doc", app, document)
  await app.listen(3000);
}
bootstrap();
