// product.route.ts
import { ProductController } from '../controllers/ProductController';
import { BaseRouter } from './BaseRouter';

export class ProductRouter extends BaseRouter {
  private controller = new ProductController();

  execute() {
    this.router.get('/', this.controller.getAllProducts);
    this.router.post('/', this.controller.createProduct);

    return this.router;
  }
}
