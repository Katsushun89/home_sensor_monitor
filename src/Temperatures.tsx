import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(
  id: number,
  room: string,
  data: number,
  date: string,
) {
  return { id, room, data, date };
}

const rows = [
  createData(
    0,
    '寝室',
    22.8,
    '16 Mar,2022'
    ),
  createData(
    0,
    'リビング',
    23.8,
    '16 Mar,2022'
  ),
  createData(
    0,
    '玄関',
    19.8,
    '16 Mar,2022'
  ),
  createData(
    0,
    '屋外',
    12.8,
    '16 Mar,2022'
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Temperatures() {
  return (
    <React.Fragment>
      <Title>Recent Temp.</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Room</TableCell>
            <TableCell>Temp</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
