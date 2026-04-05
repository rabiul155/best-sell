import { Request, Response } from 'express';
import { UserAction } from '../actions/UserAction';

export class UserController {
  private action = new UserAction();

  // GET /users?role=buyer
  getUsers = async (req: Request, res: Response) => {
    try {
      const role = req.query.role as string;

      const users = await this.action.getUsers(role);

      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to fetch users',
      });
    }
  };

  // GET /users/:email
  getUserByEmail = async (req: Request, res: Response) => {
    try {
      const email = req.params.email as string;

      const user = await this.action.getUserByEmail(email);

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || 'User not found',
      });
    }
  };

  // POST /users
  createUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;

      const result = await this.action.createUser(user);

      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create user',
      });
    }
  };

  // DELETE /users/:id
  deleteUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;

      await this.action.deleteUser(id);

      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || 'User not found',
      });
    }
  };
}
