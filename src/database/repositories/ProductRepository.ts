// product.repository.ts

import Product from '../models/ProductModel';

export class ProductRepository {
  async findAll() {
    return await Product.find();
  }

  async create(payload: any) {
    return await Product.create(payload);
  }
}
