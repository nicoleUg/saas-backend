import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MenuService } from '../services/menu.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('categories')
  async getCategories() {
    return this.menuService.getMenuCategories();
  }

  @Get('products/:categoryId')
  async getProducts(@Param('categoryId') categoryId: string) {
    return this.menuService.getProducts(categoryId);
  }

  @Post('categories')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    await this.menuService.addCategory(createCategoryDto);
    return { message: 'Categoría creada con éxito' };
  }

  @Post('products')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    await this.menuService.addProduct(createProductDto);
    return { message: 'Producto creado con éxito' };
  }
}