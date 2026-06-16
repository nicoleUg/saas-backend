import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../repositories/orders.repository';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(dto: CreateOrderDto) {
    return this.ordersRepository.saveFullOrder(dto);
  }

  async getOrders() {
    return this.ordersRepository.getAllOrders();
  }
}