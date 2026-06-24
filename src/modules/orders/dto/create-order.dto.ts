import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  qty: number;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsString()
  @IsOptional()
  status?: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  tableNumber: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}