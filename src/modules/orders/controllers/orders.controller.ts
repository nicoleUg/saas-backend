import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    await this.ordersService.createOrder(createOrderDto);
    return { message: 'Orden procesada con éxito en el backend' };
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}