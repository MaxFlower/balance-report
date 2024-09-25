// src/components/DataComponent.js
import React, { memo } from 'react';
import { Table, Text } from '@mantine/core';
import { ReportCell, ReportRow, ROW_TYPE } from '../../../../../lib';

interface IBalanceSheetRowProps {
  row: ReportRow;
  id: string | number;
}

const BalanceSheetRow: React.FC<IBalanceSheetRowProps> = ({ row, id }) => {
  const buildCells = (cells: ReportCell[] = []) => {
    return (
      <Table.Tr>
        {cells?.map((c, i) => (
          <Table.Td key={`${ROW_TYPE.SummaryRow}-${id}-${i}`}>
            {c.Value}
          </Table.Td>
        ))}
      </Table.Tr>
    );
  };

  const highlightedRow = (title: string, children: React.ReactNode | null) => {
    return (
      <>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Text c="blue">{title}</Text>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        {children && (
          <Table.Tbody>
            <Table.Tr>{children}</Table.Tr>
          </Table.Tbody>
        )}
      </>
    );
  };

  const buildSection = () => {
    return (
      <>
        {row.Title && highlightedRow(row.Title, null)}
        {row.Rows &&
          row.Rows.map((secRow, rId) => (
            <BalanceSheetRow row={secRow} id={rId} />
          ))}
      </>
    );
  };

  const elements: Record<ROW_TYPE, () => React.ReactNode> = {
    [ROW_TYPE.Header]: () => highlightedRow('Header', buildCells(row.Cells)),
    [ROW_TYPE.Section]: () => buildSection(),
    [ROW_TYPE.Row]: () => buildCells(row.Cells),
    [ROW_TYPE.SummaryRow]: () =>
      highlightedRow('Summary', buildCells(row.Cells)),
  };

  return elements[row.RowType]() || null;
};

export default memo(BalanceSheetRow);
