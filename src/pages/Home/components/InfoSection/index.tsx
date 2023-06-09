import React, { useEffect, useState } from 'react'
import Style from './style'
import Card from './Card'
import Chart from './Chart'

import { useTranslation } from 'react-i18next'

// icons
import { HiUsers } from 'react-icons/hi';
import { FaUserNurse } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateBicker from './DateBicker'
import StatisticsAPI from '../../../../api/statistics'
import { H5 } from '../../../../components/tiny/Typography/style'
import { useTheme } from '../../../../context/ThemeContext'

const InfoSection = () => {
    const { t } = useTranslation("");
    const { theme: { colors } } = useTheme();

    const [isLoading, setIsLoading] = useState(false);
    const [statisticsNumbers, setStatisticsNumbers] = useState({
        dermatologists: 0,
        consultations: 0,
        patients: 0,
    });

    const [chartData, setChartData] = useState({
        labels: [],
        consultations: [],
        patients: [],
    });

    const [startDate, setStartDate] = useState<Date>(() => {
        const now = new Date();
        now.setDate(new Date().getDate() - 30)
        return now;
    })
    const [endDate, setEndDate] = useState<Date>(new Date())
    useEffect(() => {
        setIsLoading(true);
        StatisticsAPI.getInfo(startDate, endDate)
            .then((res) => {
                if (res?.status && res.data) {
                    setStatisticsNumbers(res.data)
                    setChartData(res.chart)
                }
            }).finally(() => setIsLoading(false))
    }, [startDate, endDate])
    return (
        <Style>
            <div className="head">
                <H5>{t("home.statistics")}</H5>
                <DateBicker
                    setStartDate={(date) => setStartDate(date)}
                    setEndDate={(date) => setEndDate(date)}
                />
            </div>
            <div className="numbers_cards">
                <Card
                    isLoading={isLoading}
                    label={t('home.cards.dermatologists.label')}
                    data={statisticsNumbers.dermatologists + ""}
                    icon={<FaUserNurse color='#FFF' fontSize={22} />} />
                <Card
                    isLoading={isLoading}
                    label={t('home.cards.patients.label')}
                    data={statisticsNumbers.patients + ""}
                    icon={<HiUsers color='#FFF' fontSize={22} />} />
                <Card
                    isLoading={isLoading}
                    label={t('home.cards.consultations.label')}
                    data={statisticsNumbers.consultations + ""}
                    icon={<AiFillMessage color='#FFF' fontSize={22} />} />
            </div>
            <Chart
                labels={chartData.labels}
                datasets={[
                    {
                        data: chartData.consultations,
                        label: t("components.chart.consultations")
                    },
                    {
                        data: chartData.patients,
                        label: t("components.chart.patients")
                    },
                ]}
                colors={[colors.primary.main, colors.secondary.main]}
            />
        </Style>
    )
}

export default InfoSection