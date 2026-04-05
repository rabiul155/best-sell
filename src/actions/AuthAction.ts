import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../database/repositories/UserRepository';

export class AuthAction {
  private repo = new UserRepository();

  async signup(user: any) {
    const existingUser = await this.repo.findByEmail(user.email);

    if (existingUser) {
      throw new Error('User already exists');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = {
      ...user,
      password: hashedPassword,
    };

    const result = await this.repo.create(newUser);

    return result;
  }

  async login({ email, password }: any) {
    const user = await this.repo.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' },
    );

    return {
      token,
      user,
    };
  }
}
