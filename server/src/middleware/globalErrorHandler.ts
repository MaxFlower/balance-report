import { HTTP_STATUSES } from '../utils/constants';
import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  res.status(err.status || HTTP_STATUSES.INTERNAL_SERVER_ERROR);
  res.json({ message: err.message || 'Internal Server Error' });
};
