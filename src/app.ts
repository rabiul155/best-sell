import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'node:path';

import { ProductRouter } from './routes/ProductsRouter';
import { UserRouter } from './routes/UserRouter';
import { FeedbackRouter } from './routes/FeedbackRouter';
import { ReviewRouter } from './routes/ReviewRouter';
import { WishlistRouter } from './routes/WishlistRouter';
import { OrderRouter } from './routes/OrderRouter';
import GlobalErrorHandler from './middleware/GlobalErrorHandler';
import NotFoundRoute from './middleware/NotFoundRoute';
import { AuthRouter } from './routes/AuthRoute';
import helmet, { xssFilter } from 'helmet';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import { RateLimiter } from './middleware/LimitRequest';

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
// 1) MIDDLEWARES
// Set security HTTP headers
app.use(helmet());
// Parse json data
app.use(express.json({ limit: '10kb' }));
// Data sanitization against NoSQL query injection
app.use(ExpressMongoSanitize());
// Data sanitization against XSS
app.use(xssFilter());
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
// Limit requests from same API
app.use('/', RateLimiter.execute());

// routes
app.use('/auth', AuthRouter.execute());
app.use('/product', ProductRouter.execute());
app.use('/users', UserRouter.execute());
app.use('/feedback', FeedbackRouter.execute());
app.use('/review', ReviewRouter.execute());
app.use('/wishlist', WishlistRouter.execute());
app.use('/order', OrderRouter.execute());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// Error handle globally
app.use(GlobalErrorHandler.handle);
// Not found route
app.use('*', NotFoundRoute);

export default app;
