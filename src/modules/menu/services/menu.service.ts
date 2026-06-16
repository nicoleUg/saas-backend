import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../repositories/menu.repository';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}

  async getMenuCategories() {
    return this.menuRepository.findAllCategories();
  }

  async getProducts(categoryId: string) {
    return this.menuRepository.findProductsByCategory(categoryId);
  }

  async addCategory(dto: CreateCategoryDto) {
    return this.menuRepository.createCategory(dto);
  }

  async addProduct(dto: CreateProductDto) {
    return this.menuRepository.createProduct(dto);
  }
}