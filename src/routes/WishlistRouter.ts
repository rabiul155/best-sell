import { Router } from 'express';
import { WishlistController } from '../controllers/WishlistController';

export class WishlistRouter {
  static execute() {
    const router = Router();
    const controller = new WishlistController();

    router.get('/', controller.getAll); // get all wishlist items
    router.get('/:userEmail', controller.getByUser); // get wishlist by user
    router.post('/', controller.create); // add to wishlist
    router.delete('/:id', controller.delete); // remove from wishlist

    return router;
  }
}
