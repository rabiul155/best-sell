import { WishlistType } from '../database/interface/WishlistInterface';
import { WishlistRepository } from '../database/repositories/WishlistRepository';

export class WishlistAction {
  private repo = new WishlistRepository();

  async getAllWishlist() {
    return await this.repo.findAll();
  }

  async getWishlistByUser(userEmail: string) {
    return await this.repo.findByUserEmail(userEmail);
  }

  async addToWishlist(wishlist: WishlistType) {
    const existing = await this.repo.findByUserEmail(wishlist.userEmail);
    if (existing.find((item) => item.productId === wishlist.productId)) {
      throw new Error('Product already in wishlist');
    }

    return await this.repo.create(wishlist);
  }

  async removeFromWishlist(id: string) {
    const deleted = await this.repo.deleteById(id);
    if (!deleted) {
      throw new Error('Wishlist item not found');
    }
    return true;
  }
}
