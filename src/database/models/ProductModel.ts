// product.model.ts
import mongoose, { Schema, Document, model } from 'mongoose';

export interface ProductType extends Document {
  name: string;
  description?: string;
  price: number;
  inStock: boolean;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema<ProductType>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    category: { type: String },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  },
);

const Product = model<ProductType>('Product', ProductSchema);

export default Product;
