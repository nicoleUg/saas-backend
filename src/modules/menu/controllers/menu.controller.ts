import { Controller, Get, Post, Patch, Delete, Body, Param, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenuService } from '../services/menu.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { StorageService } from '../../storage/services/storage.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Patch('products/:id')
  @UseInterceptors(FileInterceptor('image'))
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      const imageUrl = await this.storageService.uploadFile(file, 'products');
      updateProductDto.imageUrl = imageUrl;
    }

    if (updateProductDto.price !== undefined && updateProductDto.price !== null) {
      updateProductDto.price = Number(updateProductDto.price);
    }

    if (updateProductDto.isAvailable !== undefined && updateProductDto.isAvailable !== null) {
      updateProductDto.isAvailable = String(updateProductDto.isAvailable) === 'true';
    }

    await this.menuService.updateProduct(id, updateProductDto);
    return { message: 'Producto actualizado con éxito' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('products/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.menuService.removeProduct(id);
    return { message: 'Producto eliminado con éxito' };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('categories/:id')
  @UseInterceptors(FileInterceptor('image'))
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      const imageUrl = await this.storageService.uploadFile(file, 'categories');
      updateCategoryDto.imageUrl = imageUrl;
    }

    if (updateCategoryDto.orderIndex !== undefined && updateCategoryDto.orderIndex !== null) {
      updateCategoryDto.orderIndex = Number(updateCategoryDto.orderIndex);
    }

    await this.menuService.updateCategory(id, updateCategoryDto);
    return { message: 'Categoría actualizada con éxito' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('categories/:id')
  async deleteCategory(@Param('id') id: string) {
    await this.menuService.removeCategory(id);
    return { message: 'Categoría eliminada con éxito' };
  }
}