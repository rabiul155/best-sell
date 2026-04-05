import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import ValidateRequest from '../middleware/ValidateRequest';
import { UserValidationSchema } from '../validation/UserValidation';

export class UserRouter {
  static execute() {
    const router = Router();
    const controller = new UserController();

    // GET all users (optional filter by role)
    router.get('/', controller.getUsers);

    // GET user by email
    router.get('/:email', controller.getUserByEmail);

    // CREATE user
    router.post(
      '/',
      ValidateRequest.validate(UserValidationSchema),
      controller.createUser,
    );

    // DELETE user by id
    router.delete('/:id', controller.deleteUser);

    return router;
  }
}
