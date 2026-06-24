import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, cert } from 'firebase-admin/app';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const serviceAccountPath = path.join(process.cwd(), 'firebase-service-account.json');
  
  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    initializeApp({
      credential: cert(serviceAccount),
      projectId: 'restaurantesaas-c1ee0',
    });
    console.log('🔥 Firebase Admin SDK inicializado usando cuenta de servicio local');
  } else {
    initializeApp({
      projectId: 'restaurantesaas-c1ee0',
    });
  }

  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, 
      whitelist: true, 
    }),
  );
  
  await app.listen(3000, '0.0.0.0');
  console.log(`Servidor backend corriendo en: http://localhost:3000 (escuchando en todas las interfaces para red local)`);
}
bootstrap();