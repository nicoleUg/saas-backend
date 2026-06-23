import { Injectable } from '@nestjs/common';
import { ReportsRepository } from '../repositories/reports.repository';

@Injectable()
export class ReportsService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async getSummary(period: string) {
    const data = await this.reportsRepository.getOrdersAndItems();
    if (!data || !data.orders) {
      return {
        totalIncome: 0,
        orderCount: 0,
        topDishes: [],
      };
    }

    const now = new Date();
    let thresholdDate = new Date();

    if (period === 'week') {
      thresholdDate.setDate(now.getDate() - 7);
    } else if (period === 'month') {
      thresholdDate.setDate(now.getDate() - 30);
    } else {
      // Default to 'today' (start of the day)
      thresholdDate.setHours(0, 0, 0, 0);
    }

    // Filter orders by date
    const filteredOrders = data.orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= thresholdDate;
    });

    // Calculate total income and count
    const totalIncome = filteredOrders.reduce((sum, order) => sum + order.total, 0);
    const orderCount = filteredOrders.length;

    // Get order items for the filtered orders
    const orderIds = new Set(filteredOrders.map((o) => o.id));
    const filteredItems = (data.orderItems || []).filter((item) => orderIds.has(item.orderId));

    // Group and count quantities of each dish
    const dishSales: { [name: string]: number } = {};
    for (const item of filteredItems) {
      const name = item.productName;
      dishSales[name] = (dishSales[name] || 0) + item.quantity;
    }

    // Convert to array, sort, and slice top 5
    const topDishes = Object.entries(dishSales)
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);

    return {
      totalIncome,
      orderCount,
      topDishes,
    };
  }
}
