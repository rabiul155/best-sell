import { Router } from 'express';
import { WishlistController } from '../controllers/WishlistController';
import { Auth } from '../middleware/Auth';

export class WishlistRouter {
  static execute() {
    const router = Router();
    const controller = new WishlistController();

    router.get('/', [Auth.Authenticate], controller.getAll); // get all wishlist items
    router.get('/:userEmail', [Auth.Authenticate], controller.getByUser); // get wishlist by user
    router.post('/', [Auth.Authenticate], controller.create); // add to wishlist
    router.delete('/:id', [Auth.Authenticate], controller.delete); // remove from wishlist

    return router;
  }
}
