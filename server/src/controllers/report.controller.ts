import { HTTP_STATUSES } from '../utils/constants';
import {
  GetBalanceSheetQueryParams,
  GetBalanceSheetResponse,
} from '../../../lib';
import { Request, Response, NextFunction } from 'express';
import * as ReportService from '../services/report.service';

export const getBalanceSheet = async (
  req: Request<GetBalanceSheetQueryParams>,
  res: Response<GetBalanceSheetResponse>,
  next: NextFunction
) => {
  try {
    const result = await ReportService.fetchReport(req.query);
    return res.status(HTTP_STATUSES.OK).json(result);
  } catch (err) {
    next(err);
  }
};
