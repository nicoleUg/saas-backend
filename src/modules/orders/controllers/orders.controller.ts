import { Controller, Post, Get, Patch, Body, UseGuards, Request, Param } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    const userId = req.user.id; 
    console.log(`Creando orden para el usuario: ${req.user.name} (${userId})`);
    
    const newOrder = await this.ordersService.createOrder(userId, createOrderDto);
    
    return { 
      message: 'Orden procesada con éxito en el backend',
      order: newOrder
    };
  }

  @Get()
  async getOrders(@Request() req) {
    const userId = req.user.id;
    return this.ordersService.getOrdersByUser(userId);
  }

  @Patch(':id/status')
  async updateOrderStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    await this.ordersService.updateStatus(id, status);
    return { message: 'Estado del pedido actualizado con éxito' };
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }
}