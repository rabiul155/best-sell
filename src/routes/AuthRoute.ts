import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import ValidateRequest from '../middleware/ValidateRequest';
import {
  SignupValidationSchema,
  LoginValidationSchema,
} from '../validation/AuthValidation';

export class AuthRouter {
  static execute() {
    const router = Router();
    const controller = new AuthController();

    router.post(
      '/signup',
      ValidateRequest.validate(SignupValidationSchema),
      controller.signup,
    );

    router.post(
      '/login',
      ValidateRequest.validate(LoginValidationSchema),
      controller.login,
    );

    return router;
  }
}
