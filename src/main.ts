import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe 유효성검사 npm i class-validator class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 요소에 없는건 도달하지 않음
      forbidNonWhitelisted: true, // 요소에 존재하지 않는 것은 요청하지 않음
      transform: true,  // dto에 지정한 타입과 다를경우 타입을 맞춰준다
    }),
  );

  await app.listen(3000);
}
bootstrap();
