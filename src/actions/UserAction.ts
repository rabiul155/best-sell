import { UserType } from '../database/interface/UserInterface';
import { UserRepository } from '../database/repositories/UserRepository';

export class UserAction {
  private UserRepo = new UserRepository();

  async getUsers(role?: string) {
    const query = role ? { role } : {};
    return await this.UserRepo.findAll(query);
  }

  async getUserByEmail(email: string) {
    const user = await this.UserRepo.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async createUser(user: UserType) {
    // 🔥 Business logic example
    const existingUser = await this.UserRepo.findByEmail(user.email);

    if (existingUser) {
      throw new Error('User already exists');
    }

    return await this.UserRepo.create(user);
  }

  async deleteUser(id: string) {
    const deleted = await this.UserRepo.deleteById(id);

    if (!deleted) {
      throw new Error('User not found');
    }

    return true;
  }
}
