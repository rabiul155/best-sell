import { Router } from 'express';
import { FeedbackController } from '../controllers/FeedbackController';
import ValidateRequest from '../middleware/ValidateRequest';
import { FeedbackValidationSchema } from '../validation/FeedbackValidation';
import { Auth } from '../middleware/Auth';

export class FeedbackRouter {
  static execute() {
    const router = Router();
    const controller = new FeedbackController();

    router.get('/', controller.getAllFeedback);

    router.post(
      '/',
      [Auth.Authenticate],
      ValidateRequest.validate(FeedbackValidationSchema),
      controller.createFeedback,
    );

    return router;
  }
}
