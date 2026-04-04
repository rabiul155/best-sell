// product.validation.ts
import { z } from 'zod';

export const ProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        error: 'Product name is required',
      })
      .min(1, 'Product name cannot be empty'),

    description: z.string().optional(),

    price: z
      .number({
        error: 'Price is required',
      })
      .positive('Price must be greater than 0'),

    inStock: z.boolean().optional(),

    category: z.string().optional(),
  }),
});
