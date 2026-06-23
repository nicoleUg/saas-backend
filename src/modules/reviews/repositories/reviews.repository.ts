import { Injectable } from '@nestjs/common';
import { createReview, getReviewsByProduct } from '@dataconnect/admin-generated';

@Injectable()
export class ReviewsRepository {
  async saveReview(userId: string, productId: string, rating: number, comment: string) {
    try {
      console.log(`[ReviewsRepository] Intentando guardar reseña: userId=${userId}, productId=${productId}, rating=${rating}, comment=${comment}`);
      const response = await createReview({
        userId,
        productId,
        rating,
        comment,
      });

      if ((response as any).errors && (response as any).errors.length > 0) {
        console.error('[ReviewsRepository] Errores devueltos por Data Connect al guardar reseña:', JSON.stringify((response as any).errors, null, 2));
        throw new Error(`DataConnect Error: ${(response as any).errors[0].message}`);
      }

      console.log('[ReviewsRepository] Reseña guardada con éxito:', JSON.stringify(response.data, null, 2));
      return response.data;
    } catch (e) {
      console.error('[ReviewsRepository] EXCEPCIÓN AL GUARDAR RESEÑA EN DATA CONNECT:', e);
      throw e;
    }
  }

  async findByProduct(productId: string) {
    try {
      console.log(`[ReviewsRepository] Obteniendo reseñas para producto: ${productId}`);
      const response = await getReviewsByProduct({ productId });

      if ((response as any).errors && (response as any).errors.length > 0) {
        console.error('[ReviewsRepository] Errores devueltos por Data Connect al obtener reseñas:', JSON.stringify((response as any).errors, null, 2));
        throw new Error(`DataConnect Error: ${(response as any).errors[0].message}`);
      }

      const reviews = response.data?.reviews || [];
      console.log(`[ReviewsRepository] Se encontraron ${reviews.length} reseñas`);
      return reviews;
    } catch (e) {
      console.error('[ReviewsRepository] EXCEPCIÓN AL OBTENER RESEÑAS:', e);
      throw e;
    }
  }
}
