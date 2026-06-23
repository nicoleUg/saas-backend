import { Injectable } from '@nestjs/common';
import { createReview, getReviewsByProduct } from '@dataconnect/admin-generated';

@Injectable()
export class ReviewsRepository {
  async saveReview(userId: string, productId: string, rating: number, comment: string) {
    const response = await createReview({
      userId,
      productId,
      rating,
      comment,
    });
    return response.data;
  }

  async findByProduct(productId: string) {
    const response = await getReviewsByProduct({ productId });
    return response.data.reviews;
  }
}
