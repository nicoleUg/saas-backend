import { Injectable } from '@nestjs/common';
import { 
  getCategories, 
  getProductsByCategory, 
  createCategory, 
  createProduct,
  updateProduct,
  deleteProduct,
  updateCategory,
  deleteCategory
} from '@dataconnect/admin-generated';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class MenuRepository {
  async findAllCategories() {
    const response = await getCategories();
    return response.data.categories;
  }

  async findProductsByCategory(categoryId: string) {
    const response = await getProductsByCategory({ categoryId });
    return response.data.products;
  }

  async createCategory(dto: CreateCategoryDto) {
    const response = await createCategory({ 
      name: dto.name, 
      orderIndex: dto.orderIndex,
      imageUrl: dto.imageUrl
    });
    return response.data;
  }

  async createProduct(dto: CreateProductDto) {
    const response = await createProduct({ 
      categoryId: dto.categoryId, 
      name: dto.name, 
      description: dto.description, 
      price: dto.price,
      imageUrl: dto.imageUrl
    });
    return response.data;
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    const response = await updateProduct({
      id,
      categoryId: dto.categoryId,
      name: dto.name,
      description: dto.description,
      price: dto.price,
      imageUrl: dto.imageUrl,
      isAvailable: dto.isAvailable
    });
    return response.data;
  }

  async deleteProduct(id: string) {
    const response = await deleteProduct({ id });
    return response.data;
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    const response = await updateCategory({
      id,
      name: dto.name,
      orderIndex: dto.orderIndex,
      imageUrl: dto.imageUrl
    });
    return response.data;
  }

  async deleteCategory(id: string) {
    const response = await deleteCategory({ id });
    return response.data;
  }
}