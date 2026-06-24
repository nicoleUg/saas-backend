import { Injectable } from '@nestjs/common';
import { getOrdersWithItems } from '@dataconnect/admin-generated';

@Injectable()
export class ReportsRepository {
  async getOrdersAndItems() {
    const response = await getOrdersWithItems();
    return response.data;
  }
}
