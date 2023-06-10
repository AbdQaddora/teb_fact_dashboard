import React, { useMemo } from 'react'
import Style from './style'

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

import { Line } from 'react-chartjs-2';
import { dateToUsString } from '../../../../../util';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};
interface IData {
    data: number[],
    label: string
}
interface IProps {
    datasets: IData[]
    labels: string[],
    colors?: string[]
}

const Chart = ({ datasets, labels, colors }: IProps) => {
    const data = useMemo(() => {
        const mockData = {
            labels:labels.map(el => dateToUsString(el)),
            datasets: datasets.map((el, index) => ({
                ...el,
                borderColor: colors ? colors[index] : "#3832A0",
                backgroundColor: colors ? colors[index] : "#3832A0",
            })),
        };

        return mockData;
    }, [datasets, labels, colors]);

    return (
        <Style>
            <div className="chart">
                <Line options={options} data={data} />
            </div>
        </Style>
    )
}

export default Chart