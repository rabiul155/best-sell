import z from 'zod';

export const UserValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['seller', 'buyer'], 'Invalid user role'),
});
