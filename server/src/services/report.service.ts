import {
  GetBalanceSheetQueryParams,
  GetBalanceSheetResponse,
} from '../../../lib';
import { ERROR_MESSAGE, RequestError } from '../errors/errors';
import { XRO_API } from '../utils/constants';

const XRO_API_REPORT = `${XRO_API}/Reports`;

export const fetchReport = async (
  params: GetBalanceSheetQueryParams
): Promise<GetBalanceSheetResponse> => {
  const date = params.date;
  const periods = params.periods;
  const timeframe = params.timeframe;
  const queryParams = new URLSearchParams(
    JSON.parse(JSON.stringify({ date, periods, timeframe }))
  ).toString();

  const response = await fetch(
    `${XRO_API_REPORT}/BalanceSheet${queryParams ? '?' + queryParams : ''}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new RequestError(ERROR_MESSAGE.XPO_REQUEST_FAILED);
  }
  const result = await response.json();
  return result;
};
