import rateLimit from 'express-rate-limit';

export class RateLimiter {
  static execute(options?: {
    max?: number;
    windowMs?: number;
    message?: string;
  }) {
    return rateLimit({
      max: options?.max ?? 100,
      windowMs: options?.windowMs ?? 60 * 60 * 1000, // 1 hour
      message:
        options?.message ??
        'Too many requests from this IP, please try again in an hour!',
    });
  }
}
