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
    BarElement,
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
    BarElement,
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


const ChartsTypes = [
    { value: 'LINE', label: 'Line chart' },
    { value: 'BAR', label: 'Bar chart' },
];

const Chart = () => {
    const data: typeof mockData = useMemo(() => mockData, []);
    const [ChartType, setChartType] = useState<SingleValue<{
        value: string;
        label: string;
    }>>(ChartsTypes[0]);

    return (
        <Style>
            <div className="header">
                <Select
                    className='chart_type_select'
                    options={ChartsTypes}
                    onChange={(val) => { setChartType(val) }}
                    value={ChartType}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 4,
                        colors: {
                            ...theme.colors,
                            primary: '#3832A0',
                        },
                    })}
                />
            </div>
            <div className="chart">
                {ChartType?.value === 'LINE' && <Line options={options} data={data} />}
                {ChartType?.value === 'BAR' && <Bar options={options} data={data} />}
            </div>
        </Style>
    )
}

export default Chart