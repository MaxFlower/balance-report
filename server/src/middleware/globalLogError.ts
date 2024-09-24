import { Request, Response, NextFunction } from 'express';

export const globalLogErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error logged: ', err.message);
  next(err);
};
