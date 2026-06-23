import { Injectable } from '@nestjs/common';
import { createFavorite, deleteFavorite, getFavorites } from '@dataconnect/admin-generated';

@Injectable()
export class FavoritesRepository {
  async addFavorite(userId: string, productId: string) {
    const response = await createFavorite({ userId, productId });
    return response.data;
  }

  async removeFavorite(userId: string, productId: string) {
    const response = await deleteFavorite({ userId, productId });
    return response.data;
  }

  async listFavorites(userId: string) {
    const response = await getFavorites({ userId });
    return response.data.favorites;
  }
}
