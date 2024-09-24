import { Request, Response, NextFunction } from 'express';
import { GetBalanceSheetQueryParams } from '../../../lib';
import { ERROR_MESSAGE, ValidationError } from '../errors/errors';

export const validateQueryParams = (
  req: Request<GetBalanceSheetQueryParams>,
  res: Response,
  next: NextFunction
) => {
  const periods = req.query['periods'];
  const parsedPeriods =
    periods && typeof periods === 'string' && parseInt(periods);
  if (parsedPeriods && (parsedPeriods < 1 || parsedPeriods > 11)) {
    throw new ValidationError(ERROR_MESSAGE.VALIDATION_ERROR);
  }

  next();
};
