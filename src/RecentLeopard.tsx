import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useEnvsensors } from './useEnvsensors';
import { Envsensor } from './API';
import { useEffect, useMemo } from 'react';

const envsensorDeviceIdToRoom = {
    'twelaria0005': 'レオパ',
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

export default function RecentLeopard() {
    const { envsensors, requestEnvsensors } = useEnvsensors();

    let timestamp: string
    useEffect(() => {
        console.log("requestEnvsensors in RecenseLeopard");
        const now = new Date();
        let previousDate = new Date();
        previousDate.setMinutes(previousDate.getMinutes() - 15) //minus 10min

        requestEnvsensors(Math.floor((previousDate.getTime()) / 1000),
            Math.floor(now.getTime() / 1000),
            3 * Object.keys(envsensorDeviceIdToRoom).length);
    }, [requestEnvsensors]);

    console.log("called RecentLeopard")

    const leopardTemp = () => {
            const leopard = getEnvSeries(envsensors, 'temperature').find(
                item => item.name === `レオパ`
            )
            const temp = leopard && leopard.data.length ? leopard.data[leopard.data.length - 1][1] : 0
        return temp + "[℃]"
    }

    const leopardHumidity = () => {
            const leopard = getEnvSeries(envsensors, 'humidity').find(
                item => item.name === `レオパ`
            )
            const humidity = leopard && leopard.data.length ? leopard.data[leopard.data.length - 1][1] : 0
        return humidity + "[%]"
    }

    const leopardTimestamp = () => {
            const leopard = getEnvSeries(envsensors, 'temperature').find(
                item => item.name === `レオパ`
            )
            const timestamp = leopard && leopard.data.length ? timestamp2Time(leopard.data[leopard.data.length - 1][0]) : "null"
        return timestamp
    }

    return (
    <React.Fragment>
        <Title>レオパケース</Title>
        <Typography component="p" variant="h4">
            {leopardTemp()}
        </Typography>
        <Typography component="p" variant="h4">
            {leopardHumidity()}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
            {leopardTimestamp()}
        </Typography>
    </React.Fragment>
  );
}
