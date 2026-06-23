import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    console.log(`Orden recibida del usuario: ${req.user.name}`);
    
    await this.ordersService.createOrder(createOrderDto);
    return { message: 'Orden procesada con éxito en el backend' };
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}