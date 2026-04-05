import { RequestHandler } from 'express';
import AppError from './AppError';

const NotFoundRoute: RequestHandler = (req, res, next) => {
  next(
    new AppError(
      404,
      `Cannot find this route ${req.originalUrl} on this server`,
    ),
  );
};

export default NotFoundRoute;
