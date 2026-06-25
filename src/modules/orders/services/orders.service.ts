import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../repositories/orders.repository';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(userId: string, dto: CreateOrderDto) {
    return this.ordersRepository.saveFullOrder(userId, dto);
  }

  async getOrders() {
    return this.ordersRepository.getAllOrders();
  }

  async getOrdersByUser(userId: string) {
    return this.ordersRepository.getOrdersByUser(userId);
  }

  async updateStatus(id: string, status: string) {
    return this.ordersRepository.updateStatus(id, status);
  }

  async getOrderById(id: string) {
    return this.ordersRepository.getOrderById(id);
  }
}