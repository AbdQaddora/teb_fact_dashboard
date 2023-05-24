import React, { useMemo, useState } from 'react'
import Style from './style'
import Select, { SingleValue } from 'react-select';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const mockData = {
    labels,
    datasets: [
        {
            label: 'This year',
            data: labels.map(() => Math.round(Math.random() * 1000)),
            borderColor: '#3832A0',
            backgroundColor: '#3832A0',
        },
        {
            label: 'Last year',
            data: labels.map(() => Math.round(Math.random() * 1000)),
            borderColor: 'rgb(192, 72, 125)',
            backgroundColor: 'rgb(255, 116, 177)',
        }
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

const Chart = () => {
    const data: typeof mockData = useMemo(() => mockData, []);


    return (
        <Style>
            <div className="chart">
                <Line options={options} data={data} />
            </div>
        </Style>
    )
}

export default Chart