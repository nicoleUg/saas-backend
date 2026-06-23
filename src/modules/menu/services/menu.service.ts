import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../repositories/menu.repository';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

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

  async updateProduct(id: string, dto: UpdateProductDto) {
    return this.menuRepository.updateProduct(id, dto);
  }

  async removeProduct(id: string) {
    return this.menuRepository.deleteProduct(id);
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    return this.menuRepository.updateCategory(id, dto);
  }

  async removeCategory(id: string) {
    return this.menuRepository.deleteCategory(id);
  }
}