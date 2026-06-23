import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
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
  status: string;
  tableNumber: number;
  items: OrderItemDto[];
}