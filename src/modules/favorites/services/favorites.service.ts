import { Injectable } from '@nestjs/common';
import { FavoritesRepository } from '../repositories/favorites.repository';
import { CreateFavoriteDto } from '../dto/create-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private readonly favoritesRepository: FavoritesRepository) {}

  async addFavorite(userId: string, dto: CreateFavoriteDto) {
    return this.favoritesRepository.addFavorite(userId, dto.productId);
  }

  async removeFavorite(userId: string, productId: string) {
    return this.favoritesRepository.removeFavorite(userId, productId);
  }

  async getFavorites(userId: string) {
    return this.favoritesRepository.listFavorites(userId);
  }
}
