import { z } from 'zod';

export const SignupValidationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['buyer', 'seller']),
});

export const LoginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
