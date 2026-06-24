import { Injectable } from '@nestjs/common';
import { createOrder, createOrderItem, getOrders, updateOrderStatus, getOrderById, getOrdersWithItems } from '@dataconnect/admin-generated';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrdersRepository {
  
  async saveFullOrder(dto: CreateOrderDto) {
    try {
      console.log('[OrdersRepository] Intento de guardado de orden:', JSON.stringify(dto, null, 2));
      
      const orderRes = await createOrder({
        id: dto.id,
        total: dto.total,
        status: dto.status || 'pending',
        tableNumber: dto.tableNumber || 0,
      });
      console.log('[OrdersRepository] Pedido principal insertado con éxito:', orderRes);

      if (dto.items && Array.isArray(dto.items)) {
        for (const item of dto.items) {
          console.log('[OrdersRepository] Insertando item de orden:', item);
          const itemRes = await createOrderItem({
            orderId: dto.id,
            productName: item.name,
            quantity: item.qty,
          });
          console.log('[OrdersRepository] Item de orden insertado con éxito:', itemRes);
        }
      } else {
        console.warn('[OrdersRepository] Advertencia: dto.items es nulo o no es un array:', dto.items);
      }
      
      return { success: true, orderId: dto.id };
    } catch (e) {
      console.error('[OrdersRepository] ERROR AL GUARDAR LA ORDEN COMPLETA EN DATA CONNECT:', e);
      if (e && typeof e === 'object') {
        const anyError = e as any;
        if (anyError.message) console.error('[OrdersRepository] Mensaje del error:', anyError.message);
        if (anyError.stack) console.error('[OrdersRepository] Stack trace:', anyError.stack);
        if (anyError.errors) console.error('[OrdersRepository] Errores internos de Data Connect:', JSON.stringify(anyError.errors, null, 2));
        if (anyError.response) console.error('[OrdersRepository] Respuesta HTTP de error:', anyError.response.data || anyError.response);
      }
      throw e;
    }
  }

  async getAllOrders() {
    const response = await getOrdersWithItems();
    const { orders, orderItems } = response.data;
    return orders.map(order => {
      const items = orderItems
        .filter(item => item.orderId === order.id)
        .map(item => ({
          name: item.productName,
          qty: item.quantity,
        }));
      return {
        id: order.id,
        total: order.total,
        status: order.status,
        tableNumber: order.tableNumber,
        createdAt: order.createdAt,
        items,
      };
    });
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
      tableNumber: response.data.order.tableNumber,
      createdAt: response.data.order.createdAt,
      items: response.data.orderItems.map(item => ({
        id: item.id,
        name: item.productName,
        qty: item.quantity,
      })),
    };
  }
}