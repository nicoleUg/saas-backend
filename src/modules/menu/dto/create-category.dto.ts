import { Type } from 'class-transformer';
import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Number)
  @IsNumber()
  orderIndex: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}