// src/components/DataComponent.js
import React, { useEffect, useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { Table, Text, Alert } from '@mantine/core';
import { fetchBalanceSheet } from '../../services/report.service';
import { Report } from '../../../../lib';
import { Loader } from '@mantine/core';
import BalanceSheetRow from './BalanceSheetRow/BalanceSheetRow';

const BalanceSheet: React.FC = () => {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSheet = async () => {
      try {
        const reports = await fetchBalanceSheet();
        setReport(reports.Reports?.[0]);
      } catch (err) {
        setError('Failed to fetch report');
      } finally {
        setLoading(false);
      }
    };

    getSheet();
  }, []);

  if (loading)
    return (
      <>
        <Loader color="blue" />
        <p>Loading</p>
      </>
    );
  if (error || !report)
    return (
      <Alert
        variant="light"
        color="red"
        title="Error occured"
        icon={<IconInfoCircle />}
      >
        {error}
      </Alert>
    );

  return (
    <>
      <Text fw={700}>
        {report?.ReportID}: {report.ReportTitles.join(' ')}
      </Text>
      <Table>
        {report.Rows.map((r, idx) => (
          <BalanceSheetRow row={r} id={idx} key={`BalanceSheetRow-${idx}`} />
        ))}
      </Table>
    </>
  );
};

export default BalanceSheet;
