import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService);
  let env: string = process.env.NODE_ENV;
  let _port: number = config.get<number>(env)['port'];
  let port = _port ? _port : process.env.port;

  app.useGlobalPipes(new ValidationPipe());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Moonsheet Microservice')
    .setDescription('Moonsheet Microservice')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap();
