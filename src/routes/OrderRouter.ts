import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';

export class OrderRouter {
  static execute() {
    const router = Router();
    const controller = new OrderController();

    router.get('/', controller.getAll); // get all orders
    router.get('/:email', controller.getByUser); // get orders by user
    router.post('/', controller.create); // create order
    router.delete('/:id', controller.delete); // delete order

    return router;
  }
}
