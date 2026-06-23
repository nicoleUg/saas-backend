export class OrderItemDto {
  name: string;
  qty: number;
}

export class CreateOrderDto {
  id: string;
  total: number;
  status: string;
  tableNumber: number;
  items: OrderItemDto[];
}