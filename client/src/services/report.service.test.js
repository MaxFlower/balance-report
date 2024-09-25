import { APP_ERRORS } from '../types';
import { fetchBalanceSheet } from './report.service';
import { API_URL } from './report.service';

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('fetches data successfully from an API', async () => {
  const mockData = { name: 'Maksim Tsvetkov' };
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData,
  });

  const result = await fetchBalanceSheet();
  expect(result).toEqual(mockData);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(API_URL);
});

test('throws an error when the network response is not ok', async () => {
  fetch.mockResolvedValueOnce({
    ok: false,
  });

  await expect(fetchBalanceSheet()).rejects.toThrow(
    'Network response was not ok'
  );
});

test('throws an error when fetch fails', async () => {
  fetch.mockRejectedValueOnce(new Error(APP_ERRORS.NETWERK_ERROR));

  await expect(fetchBalanceSheet()).rejects.toThrow(APP_ERRORS.NETWERK_ERROR);
});
