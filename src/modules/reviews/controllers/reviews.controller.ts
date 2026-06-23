import { Controller, Post, Get, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ReviewsService } from '../services/reviews.service';
import { CreateReviewDto } from '../dto/create-review.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createReview(@Body() dto: CreateReviewDto, @Request() req) {
    const userId = req.user.id;
    await this.reviewsService.createReview(userId, dto);
    return { message: 'Valoración guardada con éxito' };
  }

  @Get(':productId')
  async getReviews(@Param('productId') productId: string) {
    return this.reviewsService.getReviewsForProduct(productId);
  }
}
