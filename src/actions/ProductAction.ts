// product.action.ts

import { ProductRepository } from '../database/repositories/ProductRepository';

export class ProductAction {
  private repository = new ProductRepository();

  async getAllProducts() {
    return await this.repository.findAll();
  }

  async createProduct(payload: any) {
    // you can add business logic here
    return await this.repository.create(payload);
  }
}
