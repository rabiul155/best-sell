// Review.model.ts
import { Schema, model, Types } from 'mongoose';
import { ReviewType } from '../interface/ReviewInterface';

const reviewSchema = new Schema<ReviewType>(
  {
    productId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ReviewModel = model<ReviewType>('Review', reviewSchema);
