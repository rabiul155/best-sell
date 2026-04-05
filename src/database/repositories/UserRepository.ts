import { ObjectId } from 'mongodb';
import { UserModel } from '../models/UserModel';
import { UserType } from '../interface/UserInterface';

export class UserRepository {
  async findAll(query: any) {
    return await UserModel.find(query);
  }

  async findByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  async create(user: UserType) {
    return await UserModel.insertOne(user);
  }

  async deleteById(id: string) {
    const result = await UserModel.deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount > 0;
  }
}
