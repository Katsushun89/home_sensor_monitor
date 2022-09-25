import React, { useEffect, useMemo } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts, { ApexOptions } from 'apexcharts';
import jaLocale from 'apexcharts/dist/locales/ja.json';
import './Charts.css';
import { useEnvsensors } from './useEnvsensors';
import { useCO2sensors } from './useCO2sensors';
import { usePrssensors } from './usePrssensors';
import { isPropertySignature } from 'typescript';
import { Envsensor } from './API';
import { CO2sensor } from './API';
import { Prssensor } from './API';
import subDays from 'date-fns/subDays'
import Title from './Title';

const chartHeight = '40%';

const envsensorDeviceIdToRoom = {
    'palamb0001': '寝室',
    'twelaria0002': '玄関',
    'twelaria0003': 'リビング',
    'twelaria0004': '屋外',
    'twelaria0005': 'レオパ',
};

const co2sensorDeviceIdToRoom = {
    'co2stickc01': 'リビング',
};

const prssensorDeviceIdToRoom = {
    'prsstack01': 'リビング',
};


const initialDaysRange = 3;

const getCommonOptions = () : ApexOptions => ({
    chart: {
        group: 'chart-group',
        height: chartHeight,
        locales: [jaLocale],
        defaultLocale: 'ja',
        zoom: {
            enabled: false
        },
        animations: {
            easing: 'easeinout',
            animateGradually: {
                enabled: false,
            },
            dynamicAnimation: {
                speed: 100,
            },
        }
    },
    tooltip: {
        x: {
            format: "yyyy/MM/dd HH:mm"
        },
    },
    xaxis: {
        type: "datetime",
        title: {
            text: '日時',
            offsetY: 3,
        },
        labels: {
            datetimeUTC: false, //表示をJSTにする
        },
        min: subDays(new Date(), initialDaysRange).getTime()
    },
    yaxis: {
        labels: {
            minWidth: 30,
        },
        decimalsInFloat: 0,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
    },
});

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

const getPrsSeries = (
    prssensors: readonly Prssensor[],
    field: 'pressure'
) =>
    Object.entries(prssensorDeviceIdToRoom).map(([deviceId, room]) => ({
        name: room,
        data: prssensors
            .filter((m) => m.deviceid === deviceId)
            .map((m) => [m.timestamp * 1000, m[field]]), //convert javascript unixtime (*1000)
    }));

const TemperatureChart = () => {
    const { envsensors, requestEnvsensors } = useEnvsensors();

    useEffect(() => {
        console.log("requestEnvsensors in TemperatureChart");
        const now = new Date();
        const previousDay = subDays(now, initialDaysRange);

        requestEnvsensors(Math.floor(previousDay.getTime() / 1000),
            Math.floor(now.getTime() / 1000),
            500 * Object.keys(envsensorDeviceIdToRoom).length);
    }, [requestEnvsensors]);

    const commonOptions = useMemo(() => getCommonOptions(), []);

    return (
    <React.Fragment>
        <Title>温度</Title>
        <Chart
            className="Chart"
            options={{
                ...commonOptions,
                chart: {
                    ...commonOptions.chart,
                    id: 'temperature-chart',
                },
                yaxis: {
                    ...commonOptions.yaxis,
                    title: {
                        text: '温度[℃]',
                    },
                },
                tooltip: {
                    ...commonOptions.tooltip,
                    y: {
                        formatter: (value) => `${value.toFixed(1)}℃`,
                    },
                },
            }}
            series={ getEnvSeries(envsensors, 'temperature') as ApexAxisChartSeries}
            hegit={chartHeight}
        />
    </React.Fragment>
    )
}

const HurmidityChart = () => {
    const { envsensors, requestEnvsensors } = useEnvsensors();

    useEffect(() => {
        console.log("requestEnvsensors in HurmidityChart");
        const now = new Date();
        const previousDay = subDays(now, initialDaysRange);

        requestEnvsensors(Math.floor(previousDay.getTime() / 1000),
            Math.floor(now.getTime() / 1000),
            500 * Object.keys(envsensorDeviceIdToRoom).length);
    }, [requestEnvsensors]);

    const commonOptions = useMemo(() => getCommonOptions(), []);

    return (
    <React.Fragment>
        <Title>湿度</Title>
        <Chart
            className="Chart"
            options={{
                ...commonOptions,
                chart: {
                    ...commonOptions.chart,
                    id: 'humidity-chart',
                },
                yaxis: {
                    ...commonOptions.yaxis,
                    title: {
                        text: '湿度[%]',
                    },
                },
                tooltip: {
                    ...commonOptions.tooltip,
                    y: {
                        formatter: (value) => `${value.toFixed(1)}%`,
                    },
                },
            }}
            series={ getEnvSeries(envsensors, 'humidity') as ApexAxisChartSeries}
            hegit={chartHeight}
        />
    </React.Fragment>
    )
}


const CO2Chart = () => {
    const { co2sensors, requestCO2sensors } = useCO2sensors();

    useEffect(() => {
        console.log("requestCO2sensors in CO2Chart");
        const now = new Date();
        const previousDay = subDays(now, initialDaysRange);

        requestCO2sensors(Math.floor(previousDay.getTime() / 1000),
            Math.floor(now.getTime() / 1000),
            500 * Object.keys(co2sensorDeviceIdToRoom).length);
    }, [requestCO2sensors]);

    const commonOptions = useMemo(() => getCommonOptions(), []);

    return (
    <React.Fragment>
      <Title>CO2濃度</Title>
      <Chart
        className="Chart"
        options={{
            ...commonOptions,
            chart: {
                ...commonOptions.chart,
                id: 'co2-concentration-chart',
            },
            yaxis: {
                ...commonOptions.yaxis,
                title: {
                    text: 'CO2濃度[ppm]',
                },
            },
            tooltip: {
                ...commonOptions.tooltip,
                y: {
                    formatter: (value) => `${value.toFixed(1)}ppm`,
                },
            },
        }}
        series={ getCO2Series(co2sensors, 'concentration') as ApexAxisChartSeries}
        hegit={chartHeight}
        />
      </React.Fragment>
    )
}

const PressureChart = () => {
    const { prssensors, requestPrssensors } = usePrssensors();

    useEffect(() => {
        console.log("requestPrssensors in PressureChart");
        const now = new Date();
        const previousDay = subDays(now, initialDaysRange);

        requestPrssensors(Math.floor(previousDay.getTime() / 1000),
            Math.floor(now.getTime() / 1000),
            500 * Object.keys(prssensorDeviceIdToRoom).length);
    }, [requestPrssensors]);

    const commonOptions = useMemo(() => getCommonOptions(), []);

    return (
    <React.Fragment>
      <Title>気圧</Title>
      <Chart
        className="Chart"
        options={{
          ...commonOptions,
          chart: {
            ...commonOptions.chart,
            id: 'pressure-chart',
          },
          yaxis: {
            ...commonOptions.yaxis,
            title: {
                text: '気圧[hPa]',
            },
          },
          tooltip: {
            ...commonOptions.tooltip,
            y: {
                formatter: (value) => `${value.toFixed(1)}hPa`,
            },
          },
        }}
        series={ getPrsSeries(prssensors, 'pressure') as ApexAxisChartSeries}
        hegit={chartHeight}
      />
      </React.Fragment>
    )
}

const SensorPowerChart = () => {
    const { envsensors, requestEnvsensors } = useEnvsensors();

    useEffect(() => {
        console.log("requestEnvsensors in SensorPowerChart");
        const now = new Date();
        const previousDay = subDays(now, initialDaysRange);

        requestEnvsensors(Math.floor(previousDay.getTime() / 1000),
            Math.floor(now.getTime() / 1000),
            500 * Object.keys(envsensorDeviceIdToRoom).length);
    }, [requestEnvsensors]);

    const commonOptions = useMemo(() => getCommonOptions(), []);

    return (
    <React.Fragment>
      <Title>センサーバッテリー電圧</Title>
      <Chart
            className="Chart"
            options={{
                ...commonOptions,
                chart: {
                    ...commonOptions.chart,
                    id: 'power-chart',
                },
                yaxis: {
                    ...commonOptions.yaxis,
                    title: {
                        text: '電圧[mV]',
                    },
                },
                tooltip: {
                    ...commonOptions.tooltip,
                    y: {
                        formatter: (value) => `${value.toFixed(1)}mV`,
                    },
                },
            }}
            series={ getEnvSeries(envsensors, 'power') as ApexAxisChartSeries}
            hegit={chartHeight}
            />
      </React.Fragment>
    )
}

export {
    TemperatureChart,
    HurmidityChart,
    CO2Chart,
    PressureChart,
    SensorPowerChart,
};