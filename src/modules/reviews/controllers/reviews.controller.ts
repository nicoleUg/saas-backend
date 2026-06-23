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
    console.log('[ReviewsController] Recibida solicitud para crear valoración:', { userId, dto });
    try {
      const result = await this.reviewsService.createReview(userId, dto);
      console.log('[ReviewsController] Valoración creada exitosamente:', result);
      return { message: 'Valoración guardada con éxito' };
    } catch (e) {
      console.error('[ReviewsController] Error en createReview:', e);
      throw e;
    }
  }

  @Get(':productId')
  async getReviews(@Param('productId') productId: string) {
    console.log('[ReviewsController] Obteniendo valoraciones para el producto:', productId);
    return this.reviewsService.getReviewsForProduct(productId);
  }
}
