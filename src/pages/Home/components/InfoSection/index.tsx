import React, { useState } from 'react'
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

const InfoSection = () => {
    const { t } = useTranslation("", { keyPrefix: "home.cards" });

    const [startDate, setStartDate] = useState<Date>(() => {
        const now = new Date();
        now.setDate(new Date().getDate() - 30)
        return now;
    })
    const [endDate, setEndDate] = useState<Date>(new Date())

    return (
        <Style>
            <DateBicker
                setStartDate={(date) => setStartDate(date)}
                setEndDate={(date) => setEndDate(date)}
            />
            <div className="numbers_cards">
                <Card
                    label={t('dermatologists.label')}
                    data='70'
                    icon={<FaUserNurse color='#FFF' fontSize={22} />} />
                <Card
                    label={t('patients.label')}
                    data='1,6k'
                    icon={<HiUsers color='#FFF' fontSize={22} />} />
                <Card
                    label={t('consultations.label')}
                    data='23k'
                    icon={<AiFillMessage color='#FFF' fontSize={22} />} />
            </div>
            <Chart />
        </Style>
    )
}

export default InfoSection