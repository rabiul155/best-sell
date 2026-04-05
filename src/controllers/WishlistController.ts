import { Request, Response } from 'express';
import { WishlistAction } from '../actions/WishlistAction';

export class WishlistController {
  private action = new WishlistAction();

  getAll = async (req: Request, res: Response) => {
    try {
      const data = await this.action.getAllWishlist();
      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  getByUser = async (req: Request, res: Response) => {
    try {
      const userEmail = req.params.userEmail as string;
      const data = await this.action.getWishlistByUser(userEmail);
      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const wishlist = req.body;
      const result = await this.action.addToWishlist(wishlist);
      res
        .status(201)
        .json({ success: true, message: 'Added to wishlist', data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      await this.action.removeFromWishlist(id);
      res.status(200).json({ success: true, message: 'Removed from wishlist' });
    } catch (error: any) {
      res.status(404).json({ success: false, message: error.message });
    }
  };
}
