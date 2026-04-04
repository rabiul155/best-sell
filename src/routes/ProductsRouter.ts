// product.route.ts
import { ProductController } from '../controllers/ProductController';
import ValidateRequest from '../middleware/ValidateRequest';
import { ProductValidationSchema } from '../validation/ProductValidation';
import { Router } from 'express';
export class ProductRouter {
  static execute() {
    const router = Router();
    const controller = new ProductController();

    router.get('/', controller.getAllProducts);

    router.post(
      '/',
      ValidateRequest.validate(ProductValidationSchema),
      controller.createProduct,
    );

    return router;
  }
}
