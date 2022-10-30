import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, 
    { 
      bodyParser: true
    });
  app.enableCors();
  app.use(express.static(join(__dirname, '..', 'photos')));
  
  const config = new DocumentBuilder()
    .setTitle('Fast-Food API for Telegram Bot')
    .setDescription('Developed by Texnopos')
    .setVersion('1.0.0') 
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(8080);
}
bootstrap();
