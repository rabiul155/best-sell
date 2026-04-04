// product.model.ts
import mongoose from 'mongoose';
import { ProductType } from '../interface/ProductInterface';

const productSchema = new mongoose.Schema<ProductType>(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    picture: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    orginalPrice: {
      type: String,
      required: true,
    },
    resalePrice: {
      type: String,
      required: true,
    },
    useTime: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
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

export const ProductModel = mongoose.model<ProductType>(
  'Product',
  productSchema,
);
