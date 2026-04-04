// feedback.model.ts
import { Schema, model } from 'mongoose';
import { FeedbackType } from '../interface/FeedbackInterface';

const feedbackSchema = new Schema<FeedbackType>(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      enum: ['Excellent', 'Good', 'Average', 'Poor'],
      required: true,
    },
    rate: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  },
);

export const FeedbackModel = model<FeedbackType>('Feedback', feedbackSchema);
