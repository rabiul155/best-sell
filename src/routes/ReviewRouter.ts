import { Router } from 'express';
import { ReviewController } from '../controllers/ReviewController';
import ValidateRequest from '../middleware/ValidateRequest';
import { ReviewValidationSchema } from '../validation/ReviewValidation';
import { Auth } from '../middleware/Auth';

export class ReviewRouter {
  static execute() {
    const router = Router();
    const controller = new ReviewController();

    // GET /review/:productId
    router.get('/:productId', controller.getReviewsByProduct);

    // POST /review
    router.post(
      '/',
      [Auth.Authenticate],
      ValidateRequest.validate(ReviewValidationSchema),
      controller.createReview,
    );

    // DELETE /review/:id
    router.delete('/:id', [Auth.Authenticate], controller.deleteReview);

    return router;
  }
}
