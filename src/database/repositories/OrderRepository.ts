import { ObjectId } from 'mongodb';
import { OrderModel } from '../models/OrderModel';
import { OrderProductType } from '../interface/OrderInterface';

export class OrderRepository {
  async findAll() {
    return await OrderModel.find({});
  }

  async findByUserEmail(email: string) {
    return await OrderModel.find({ email });
  }

  async create(order: OrderProductType) {
    return await OrderModel.insertOne(order);
  }

  async deleteById(id: string) {
    const result = await OrderModel.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }
}
