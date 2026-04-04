//Review.interface.ts
import { Types } from 'mongoose';

export interface ReviewType {
  productId: string;
  name: string;
  photo: string;
  date: string;
  review: string;
}
