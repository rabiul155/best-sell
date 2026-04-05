import { OrderProductType } from '../database/interface/OrderInterface';
import { OrderRepository } from '../database/repositories/OrderRepository';

export class OrderAction {
  private repo = new OrderRepository();

  async getAllOrders() {
    return await this.repo.findAll();
  }

  async getOrdersByUser(email: string) {
    return await this.repo.findByUserEmail(email);
  }

  async createOrder(order: OrderProductType) {
    const existingOrders = await this.repo.findByUserEmail(order.email);
    if (
      existingOrders.find(
        (o) => o.productName === order.productName && o.date === order.date,
      )
    ) {
      throw new Error('Order already placed for this product today');
    }

    return await this.repo.create(order);
  }

  async deleteOrder(id: string) {
    const deleted = await this.repo.deleteById(id);
    if (!deleted) {
      throw new Error('Order not found');
    }
    return true;
  }
}
