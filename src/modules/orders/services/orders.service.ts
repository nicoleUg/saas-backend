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

  async updateStatus(id: string, status: string) {
    return this.ordersRepository.updateStatus(id, status);
  }

  async getOrderById(id: string) {
    return this.ordersRepository.getOrderById(id);
  }
}