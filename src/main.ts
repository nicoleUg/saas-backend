import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  admin.initializeApp({
    projectId: 'restaurantesaas-c1ee0',
  });

  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  await app.listen(3000);
  console.log(`Servidor backend corriendo en: http://localhost:3000`);
}
bootstrap();