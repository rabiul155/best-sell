import { UserType } from '../interface/UserInterface';
import { UserModel } from '../models/UserModel';

export class AuthRepository {
  async findByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  async create(user: UserType) {
    return await UserModel.insertOne(user);
  }
}
