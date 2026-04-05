import { ObjectId } from 'mongodb';
import { WishlistModel } from '../models/WishlistModel';
import { WishlistType } from '../interface/WishlistInterface';

export class WishlistRepository {
  async findAll() {
    return await WishlistModel.find({});
  }

  async findByUserEmail(userEmail: string) {
    return await WishlistModel.find({ userEmail });
  }

  async create(wishlist: WishlistType) {
    return await WishlistModel.insertOne(wishlist);
  }

  async deleteById(id: string) {
    const result = await WishlistModel.deleteOne({
      _id: new ObjectId(id),
    });
    return result.deletedCount > 0;
  }
}
