import { ObjectId } from 'mongodb';
import { ReviewModel } from '../models/ReviewModel';

export class ReviewRepository {
  async findByProductId(productId: string) {
    return await ReviewModel.find({ productId });
  }

  async create(review: any) {
    return await ReviewModel.insertOne(review);
  }

  async deleteById(id: string) {
    const result = await ReviewModel.deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount > 0;
  }
}
