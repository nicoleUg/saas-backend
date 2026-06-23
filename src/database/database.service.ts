import { Injectable, OnModuleInit } from '@nestjs/common';
import { initializeApp, getApps, cert, applicationDefault } from 'firebase-admin/app';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DatabaseService implements OnModuleInit {
  onModuleInit() {
    if (!getApps().length) {
      const serviceAccountPath = path.join(process.cwd(), 'firebase-service-account.json');
      
      if (fs.existsSync(serviceAccountPath)) {
        const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
        initializeApp({
          credential: cert(serviceAccount),
          projectId: 'restaurantesaas-c1ee0', 
        });
        console.log('🔥 Firebase Admin SDK inicializado en DatabaseService usando cuenta de servicio local');
      } else {
        initializeApp({
          credential: applicationDefault(),
          projectId: 'restaurantesaas-c1ee0', 
        });
        console.log('🔥 Firebase Admin SDK inicializado correctamente');
      }
    }
  }

  
}