import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useCO2sensors } from './useCO2sensors';
import { CO2sensor } from './API';
import { useEffect, useMemo } from 'react';
import subDays from 'date-fns/subDays'

const co2sensorDeviceIdToRoom = {
    'co2stickc01': 'リビング',
};

const getCO2Series = (
    co2sensors: readonly CO2sensor[],
    field: 'concentration'
) =>
    Object.entries(co2sensorDeviceIdToRoom).map(([deviceId, room]) => ({
        name: room,
        data: co2sensors
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

export default function RecentCO2() {
    const { co2sensors, requestCO2sensors } = useCO2sensors();

    let timestamp: string
    useEffect(() => {
        console.log("requestCO2sensors in CO2Chart");
        const now = new Date();
        let previousDate = new Date();
        previousDate.setMinutes(previousDate.getMinutes() - 10) //minus 10min

        requestCO2sensors(Math.floor(previousDate.getTime() / 1000),
            Math.floor(now.getTime() / 1000),
            2 * Object.keys(co2sensorDeviceIdToRoom).length);
    }, [requestCO2sensors]);

    console.log("called RecentCO2")

    const livingConcentration = () => {
            const living = getCO2Series(co2sensors, 'concentration').find(
                item => item.name === `リビング`
            )
            const concentration = living && living.data.length ? living.data[living.data.length - 1][1] : 0
        return concentration + "[ppm]"
    }

    const livingTimestamp = () => {
            const living = getCO2Series(co2sensors, 'concentration').find(
                item => item.name === `リビング`
            )
            const timestamp = living && living.data.length ? timestamp2Time(living.data[living.data.length - 1][0]) : "null"
        return timestamp
    }

    return (
    <React.Fragment>
        <Title>リビングCO2</Title>
        <Typography component="p" variant="h4">
            {livingConcentration()}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
            {livingTimestamp()}
        </Typography>
    </React.Fragment>
  );
}
