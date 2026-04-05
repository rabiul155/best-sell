import { NextFunction, Request, Response, RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from './AppError';
import { UserModel } from '../database/models/UserModel';

export class Auth {
  // Authenticate user
  public static Authenticate: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      let token;
      // 1) Get token
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
      }

      if (!token) {
        return next(
          new AppError(
            401,
            'You are not logged in! Please log in to get access.',
          ),
        );
      }

      // 2) Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string,
      ) as JwtPayload;

      // 3) Check user exists
      const currentUser = await UserModel.findOne({ email: decoded.email });

      if (!currentUser) {
        return next(
          new AppError(
            401,
            'The user belonging to this token no longer exists.',
          ),
        );
      }

      // attach user to request
      req.user = currentUser;

      next();
    } catch (error) {
      next(error); // send error to global error handler
    }
  };

  // Authorize based on roles
  public static Authorize = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.user || !roles.includes(req.user.role)) {
        return next(new AppError(403, 'You have no access to this route'));
      }

      next();
    };
  };
}
