import { Request, Response } from 'express';
import { AuthAction } from '../actions/AuthAction';

export class AuthController {
  private action = new AuthAction();

  // POST /auth/signup
  signup = async (req: Request, res: Response) => {
    try {
      const user = req.body;

      const result = await this.action.signup(user);

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  // POST /auth/login
  login = async (req: Request, res: Response) => {
    try {
      const credentials = req.body;

      const result = await this.action.login(credentials);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  };
}
