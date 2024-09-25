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

  //   const elements = [
  //     { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  //     { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  //     { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  //     { position: 56, mass: 137.33, symbol: '', name: 'Barium' },
  //     { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  //   ];

  //   const rows = elements.map((element) => (
  //     <Table.Tr key={element.name}>
  //       <Table.Td>{element.position}</Table.Td>
  //       <Table.Td>{element.name}</Table.Td>
  //       {element.symbol && <Table.Td>{element.symbol}</Table.Td>}
  //       <Table.Td>{element.mass}</Table.Td>
  //     </Table.Tr>
  //   ));

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
