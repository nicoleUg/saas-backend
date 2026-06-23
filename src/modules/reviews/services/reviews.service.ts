import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from '../repositories/reviews.repository';
import { CreateReviewDto } from '../dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository) {}

  async createReview(userId: string, dto: CreateReviewDto) {
    return this.reviewsRepository.saveReview(userId, dto.productId, dto.rating, dto.comment);
  }

  async getReviewsForProduct(productId: string) {
    return this.reviewsRepository.findByProduct(productId);
  }
}
