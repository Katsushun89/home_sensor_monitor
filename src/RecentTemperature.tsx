import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useEnvsensors } from './useEnvsensors';
import { Envsensor } from './API';
import { useEffect } from 'react';
import subDays from 'date-fns/subDays'

const envsensorDeviceIdToRoom = {
    'palamb0001': '寝室',
    'twelaria0002': '玄関',
    'twelaria0003': 'リビング',
    'twelaria0004': '屋外',
};

const getEnvSeries = (
    envsensors: readonly Envsensor[],
    field: 'temperature' | 'humidity' | 'illuminance' | 'power'
) =>
    Object.entries(envsensorDeviceIdToRoom).map(([deviceId, room]) => ({
        name: room,
        data: envsensors
            .filter((m) => m.deviceid === deviceId)
            .map((m) => [m.timestamp * 1000, m[field]]), //convert javascript unixtime (*1000)
    }));

function timestamp2Time(timestamp: number) {
    const date = new Date(timestamp)
    const MM = `0${date.getMonth() + 1}`.slice(-2);
    const dd = `0${date.getDate()}`.slice(-2);
    const HH = `0${date.getHours()}`.slice(-2);
    const mm = `0${date.getMinutes()}`.slice(-2);

    return `${MM}/${dd} ${HH}:${mm}`;
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function RecentTemperature() {
    const { envsensors, requestEnvsensors } = useEnvsensors();

    useEffect(() => {
        console.log("requestEnvsensors in RecentTemperature");
        const now = new Date();
        let previousDate = new Date();
        previousDate.setMinutes(previousDate.getMinutes() - 10) //minus 10min

        requestEnvsensors(Math.floor((previousDate.getTime()) / 1000),
            Math.floor(now.getTime() / 1000),
            2 * Object.keys(envsensorDeviceIdToRoom).length);
    }, [requestEnvsensors]);

    console.log("called RecentTemperature")

  return (
    <React.Fragment>
      <Title>最新温度</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Room</TableCell>
            <TableCell>Temp</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
            {getEnvSeries(envsensors, 'temperature').map((row) => (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.data && row.data.length ? row.data[row.data.length -1][1] : "null"}</TableCell>
              <TableCell>{row.data && row.data.length ? timestamp2Time(row.data[row.data.length - 1][0]) : "null"}</TableCell>
            </TableRow>

            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
