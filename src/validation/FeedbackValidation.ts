import { z } from 'zod';

export const FeedbackValidationSchema = z.object({
  message: z.string().min(1, 'Message is required'),
  // add more fields if needed (name, email, rating, etc.)
});
