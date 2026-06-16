import { Injectable } from '@nestjs/common';
import { createOrder, createOrderItem, getOrders } from '@dataconnect/admin-generated';
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
}