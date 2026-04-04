// wishlist.interface.ts
import { Types } from 'mongoose';

export interface WishlistType {
  userEmail: string;
  productId?: Types.ObjectId; // recommended
  productName: string;
  resalePrice: number;
  picture: string;
}
