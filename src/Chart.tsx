import * as React from 'react';
import {useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Title from './Title';
import jaLocale from 'apexcharts/dist/locales/ja.json';
import ReactApexChart from 'react-apexcharts';
import ApexCharts, { ApexOptions } from 'apexcharts';
import subDays from 'date-fns/subDays'

const chartHeight = '90%';

const series = [
    {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }
];

const getCommonOptions = () : ApexOptions => ({
    chart: {
        height: chartHeight,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
});

export default function Chart() {
  const theme = useTheme();
  const commonOptions = useMemo(() => getCommonOptions(), []);

  return (
    <React.Fragment>
        <Title>Today</Title>
        <ReactApexChart options={commonOptions} series={series} type="line" height={chartHeight} />
    </React.Fragment>
  );
}
