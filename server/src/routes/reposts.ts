import * as express from 'express';
import * as ReportController from '../controllers/report.controller';
import { validateQueryParams } from '../middleware/validationQueryParams';

const reportRoutes = express.Router();

// Report routes
reportRoutes.get(
  '/BalanceSheet',
  validateQueryParams,
  ReportController.getBalanceSheet
);

export default reportRoutes;
