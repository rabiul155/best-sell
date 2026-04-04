// order.model.ts
import { Schema, model } from 'mongoose';
import { OrderProductType } from '../interface/OrderInterface';

const orderSchema = new Schema<OrderProductType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    resalePrice: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = model<OrderProductType>('Order', orderSchema);
