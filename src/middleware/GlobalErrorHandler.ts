import { ErrorRequestHandler, Response, Request, NextFunction } from 'express';

type ErrorType = {
  statusCode?: number;
  status?: 'error' | 'success';
  message?: string;
  error?: any;
  stack?: any;
};

class GlobalErrorHandler {
  private static sendErrorDev(err: ErrorType, res: Response) {
    res.status(err.statusCode || 500).json({
      status: err.status || 'error',
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }

  private static sendErrorProd(err: ErrorType, res: Response) {
    res.status(err.statusCode || 500).json({
      status: err.status || 'error',
      message: err.message || 'Something went wrong!',
    });
  }

  public static handle: ErrorRequestHandler = (
    err: ErrorType,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    err.message = err.message || 'Internal server error';

    if (process.env.NODE_ENV === 'development') {
      GlobalErrorHandler.sendErrorDev(err, res);
    } else {
      GlobalErrorHandler.sendErrorProd(err, res);
    }
  };
}

export default GlobalErrorHandler;
