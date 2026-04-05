import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './routes/ProductsRouter';
import { UserRouter } from './routes/UserRouter';
import { FeedbackRouter } from './routes/FeedbackRouter';
import { ReviewRouter } from './routes/ReviewRouter';

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

app.use('/product', ProductRouter.execute());
app.use('/users', UserRouter.execute());
app.use('/feedback', FeedbackRouter.execute());
app.use('/review', ReviewRouter.execute());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

export default app;
