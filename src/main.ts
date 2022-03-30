import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.use(cookieParser());
  app.enableCors({
    origin : ['http://beaute-de-lorient-back.herokuapp.com/','http://localhost:3000','http://localhost:8000' ,'http://beaute-de-l-orient.herokuapp.com/'],
    credentials : true,
  });

  await app.listen(8000);
}
bootstrap();
