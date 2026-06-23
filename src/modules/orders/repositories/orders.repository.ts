import { Injectable } from '@nestjs/common';
import { createOrder, createOrderItem, getOrders, updateOrderStatus, getOrderById } from '@dataconnect/admin-generated';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrdersRepository {
  
  async saveFullOrder(dto: CreateOrderDto) {
    await createOrder({
      id: dto.id,
      total: dto.total,
      status: dto.status,
    });

    for (const item of dto.items) {
      await createOrderItem({
        orderId: dto.id,
        productName: item.name,
        quantity: item.qty,
      });
    }
    
    return { success: true, orderId: dto.id };
  }

  async getAllOrders() {
    const response = await getOrders();
    return response.data.orders;
  }

  async updateStatus(id: string, status: string) {
    const response = await updateOrderStatus({ id, status });
    return response.data;
  }

  async getOrderById(id: string) {
    const response = await getOrderById({ id });
    if (!response.data.order) {
      return null;
    }
    return {
      id: response.data.order.id,
      total: response.data.order.total,
      status: response.data.order.status,
      createdAt: response.data.order.createdAt,
      items: response.data.orderItems.map(item => ({
        id: item.id,
        name: item.productName,
        qty: item.quantity,
      })),
    };
  }
}