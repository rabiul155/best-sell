import { z } from 'zod';

export const ReviewValidationSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  name: z.string().min(1).trim(),
  photo: z.string(),
  date: z.string().min(1, 'Date is required'),
  review: z.string().min(1, 'Review is required'),
});
