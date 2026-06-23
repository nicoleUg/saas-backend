import { Injectable, OnModuleInit } from '@nestjs/common';
import { initializeApp, getApps, applicationDefault } from 'firebase-admin';


@Injectable()
export class DatabaseService implements OnModuleInit {
  onModuleInit() {
    if (!process.env.DATA_CONNECT_EMULATOR_HOST && process.env.USE_EMULATOR === 'true') {
      process.env.DATA_CONNECT_EMULATOR_HOST = '127.0.0.1:9399';
    }
    if (!getApps().length) {
      initializeApp({
        credential: applicationDefault(),
        projectId: 'restaurantesaas-c1ee0', 
      });
      console.log('🔥 Firebase Admin SDK inicializado correctamente');
    }
  }

  
}