// user.model.ts
import { Schema, model } from 'mongoose';
import { UserType } from '../interface/UserInterface';

const userSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // prevent duplicate users
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['buyer', 'seller'],
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<UserType>('User', userSchema);
