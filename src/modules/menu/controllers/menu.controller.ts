import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenuService } from '../services/menu.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { StorageService } from '../../storage/services/storage.service';

@Controller('menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly storageService: StorageService, 
  ) {}

  @Get('categories')
  async getCategories() {
    return this.menuService.getMenuCategories();
  }

  @Get('products/:categoryId')
  async getProducts(@Param('categoryId') categoryId: string) {
    return this.menuService.getProducts(categoryId);
  }

  @Post('categories')
  @UseInterceptors(FileInterceptor('image')) 
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let imageUrl: string | undefined;
    if (file) {
      imageUrl = await this.storageService.uploadFile(file, 'categories');
      createCategoryDto.imageUrl = imageUrl;
    }
    
    createCategoryDto.orderIndex = Number(createCategoryDto.orderIndex);

    await this.menuService.addCategory(createCategoryDto);
    return { message: 'Categoría creada con éxito', imageUrl };
  }

  @Post('products')
  @UseInterceptors(FileInterceptor('image'))
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let imageUrl: string | undefined;
    if (file) {
      imageUrl = await this.storageService.uploadFile(file, 'products');
      createProductDto.imageUrl = imageUrl;
    }

    createProductDto.price = Number(createProductDto.price);

    await this.menuService.addProduct(createProductDto);
    return { message: 'Producto creado con éxito', imageUrl };
  }
}