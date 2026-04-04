import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

class ValidateRequest {
  static validate(schema: ZodObject) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync(req.body);
        next();
      } catch (err) {
        next(err);
      }
    };
  }
}

export default ValidateRequest;
