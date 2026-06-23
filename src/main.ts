import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  if (!process.env.DATA_CONNECT_EMULATOR_HOST && process.env.NODE_ENV !== 'production' && process.env.CONNECT_TO_PRODUCTION !== 'true') {
    process.env.DATA_CONNECT_EMULATOR_HOST = '127.0.0.1:9399';
  }

  admin.initializeApp({
    projectId: 'restaurantesaas-c1ee0',
  });

  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  await app.listen(3000);
  console.log(`Servidor backend corriendo en: http://localhost:3000`);
}
bootstrap();