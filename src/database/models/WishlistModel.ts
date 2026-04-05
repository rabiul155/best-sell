// wishlist.model.ts
import { Schema, model, Types } from 'mongoose';
import { WishlistType } from '../interface/WishlistInterface';

const wishlistSchema = new Schema<WishlistType>(
  {
    userEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    resalePrice: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const WishlistModel = model<WishlistType>('Wishlist', wishlistSchema);
