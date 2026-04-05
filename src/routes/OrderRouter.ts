import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { Auth } from '../middleware/Auth';

export class OrderRouter {
  static execute() {
    const router = Router();
    const controller = new OrderController();

    router.get('/', [Auth.Authenticate], controller.getAll); // get all orders
    router.get('/:email', [Auth.Authenticate], controller.getByUser); // get orders by user
    router.post('/', [Auth.Authenticate], controller.create); // create order
    router.delete('/:id', [Auth.Authenticate], controller.delete); // delete order

    return router;
  }
}
