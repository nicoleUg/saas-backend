import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';


@Injectable()
export class DatabaseService implements OnModuleInit {
  onModuleInit() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        projectId: 'restaurantesaas', 
      });
      console.log('🔥 Firebase Admin SDK inicializado correctamente');
    }
  }

  
}