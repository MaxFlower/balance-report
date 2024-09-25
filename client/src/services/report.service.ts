import { APP_ERRORS } from '../types';
import { GetBalanceSheetResponse } from '../../../lib';

export const API_URL = 'http://localhost:4000/BalanceSheet';

export const fetchBalanceSheet = async (): Promise<GetBalanceSheetResponse> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(APP_ERRORS.NETWERK_ERROR);
    }
    const reports = await response.json();
    return reports;
  } catch (error) {
    console.error('Error fetching balance sheet:', error);
    throw error;
  }
};
