import { Injectable, BadRequestException } from '@nestjs/common';
import { getStorage } from 'firebase-admin/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StorageService {
  private bucket;

  constructor() {
    // Inicializamos la referencia al bucket por defecto de tu proyecto de Firebase
    this.bucket = getStorage().bucket('restaurantesaas-c1ee0.firebasestorage.app');
  }

  async uploadFile(file: Express.Multer.File, folder: string = 'menu'): Promise<string> {
    if (!file) {
      throw new BadRequestException('No se ha proporcionado ningún archivo');
    }

    // Generamos un nombre único para el archivo usando UUID para evitar colisiones
    const fileExtension = file.originalname.split('.').pop();
    const fileName = `${folder}/${uuidv4()}.${fileExtension}`;
    const blob = this.bucket.file(fileName);

    // Creamos el flujo de escritura hacia Firebase Storage
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (error) => {
        reject(new BadRequestException(`Error al subir archivo a Firebase: ${error.message}`));
      });

      blobStream.on('finish', async () => {
        try {
          // Hacemos el archivo público para que Flutter pueda consumirlo directamente mediante una URL estática
          await blob.makePublic();
          const publicUrl = `https://storage.googleapis.com/${this.bucket.name}/${blob.name}`;
          resolve(publicUrl);
        } catch (error) {
          reject(new BadRequestException(`Error al hacer público el archivo: ${error.message}`));
        }
      });

      // Escribimos el buffer del archivo en el stream
      blobStream.end(file.buffer);
    });
  }
}
