import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BalanceSheetComponent from './BalanceSheet';
import { fetchBalanceSheet } from '../../services/report.service';
import { createTheme, MantineProvider } from '@mantine/core';
import { reportsMock } from '../../../../lib';

const theme = createTheme({});

jest.mock('../../services/report.service');

const wrapByMantineProvider = (children: React.ReactNode) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}

describe('Test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('renders loading state initially', () => {
    (fetchBalanceSheet as jest.Mock).mockResolvedValueOnce({ Reports : [] });
    render(wrapByMantineProvider(<BalanceSheetComponent />));
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  
  test('renders data when fetch is successful', async () => {
    const mockData = reportsMock;
    (fetchBalanceSheet as jest.Mock).mockResolvedValueOnce(mockData);
  
    render(wrapByMantineProvider(<BalanceSheetComponent />));
  
    await waitFor(() => expect(screen.getByText(/Business Bank Account/i)).toBeInTheDocument());
    expect(screen.getByText(/Total Bank/i)).toBeInTheDocument();
  });
  
  test('renders error message when fetch fails', async () => {
    (fetchBalanceSheet as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
  
    render(wrapByMantineProvider(<BalanceSheetComponent />));
  
    await waitFor(() => expect(screen.getByText(/failed to fetch report/i)).toBeInTheDocument());
  });
});
