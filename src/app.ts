import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './routes/ProductsRouter';
import { UserRouter } from './routes/UserRouter';
import { FeedbackRouter } from './routes/FeedbackRouter';
import { ReviewRouter } from './routes/ReviewRouter';
import { WishlistRouter } from './routes/WishlistRouter';
import { OrderRouter } from './routes/OrderRouter';
import GlobalErrorHandler from './middleware/GlobalErrorHandler';
import NotFoundRoute from './middleware/NotFoundRoute';

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

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
