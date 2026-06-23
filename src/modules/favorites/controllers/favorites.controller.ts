import { Controller, Post, Delete, Get, Body, Param, UseGuards, Request } from '@nestjs/common';
import { FavoritesService } from '../services/favorites.service';
import { CreateFavoriteDto } from '../dto/create-favorite.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  async addFavorite(@Body() dto: CreateFavoriteDto, @Request() req) {
    const userId = req.user.id;
    await this.favoritesService.addFavorite(userId, dto);
    return { message: 'Plato agregado a favoritos con éxito' };
  }

  @Delete(':productId')
  async removeFavorite(@Param('productId') productId: string, @Request() req) {
    const userId = req.user.id;
    await this.favoritesService.removeFavorite(userId, productId);
    return { message: 'Plato eliminado de favoritos con éxito' };
  }

  @Get()
  async getFavorites(@Request() req) {
    const userId = req.user.id;
    return this.favoritesService.getFavorites(userId);
  }
}
