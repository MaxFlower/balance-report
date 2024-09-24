import { app } from '../index';
import * as request from 'supertest';
import * as ReportService from '../services/report.service';
import { GetBalanceSheetResponse } from '../../../lib';
import { HTTP_STATUSES } from '../utils/constants';
import { ERROR_MESSAGE } from '../errors/errors';

jest.mock('../services/report.service');

describe('GET /BalanceSheet', () => {
  it('responds with BalanceSheet', async () => {
    const mockReport: GetBalanceSheetResponse = {
      Reports: [
        {
          ReportID: 'BalanceSheet',
          ReportName: 'Balance Sheet',
          ReportType: 'BalanceSheet',
          ReportTitles: [
            'Balance S',
            'Demo Company (AU)',
            'As at 28 February 2018',
          ],
          ReportDate: '23 February 2018',
          UpdatedDateUTC: '/Date(1519358515899)/',
          Rows: [],
        },
      ],
    };

    (ReportService.fetchReport as jest.Mock).mockResolvedValue(mockReport);

    const response = await request(app).get('/BalanceSheet');
    expect(response.status).toBe(HTTP_STATUSES.OK);
    expect(response.body.Reports[0].ReportID).toEqual('BalanceSheet');
  });

  it('responds with BadRequest if request to XRO API failed', async () => {
    (ReportService.fetchReport as jest.Mock).mockRejectedValue(
      new Error(ERROR_MESSAGE.FETCH_TYPE_FAILED)
    );

    const response = await request(app).get('/BalanceSheet');
    expect(response.status).toBe(HTTP_STATUSES.INTERNAL_SERVER_ERROR);
    expect(response.body.message).toEqual(ERROR_MESSAGE.FETCH_TYPE_FAILED);
  });

  it('responds with BadRequest if query param is invalid', async () => {
    const response = await request(app).get('/BalanceSheet?periods=13');
    expect(response.status).toBe(HTTP_STATUSES.BAD_REQUEST);
    expect(response.body.message).toEqual(ERROR_MESSAGE.VALIDATION_ERROR);
  });
});
