import React from 'react'
import LatestConsultations from './components/LatestConsultations'
import Chart from './components/Chart'
import Card from './components/Card'
import Style from './style';
import { useTranslation } from 'react-i18next';
// icons
import { HiUsers } from 'react-icons/hi';
import { FaUserNurse } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';

const Home = () => {
  const { t } = useTranslation("", { keyPrefix: "home.cards" });
  return (
    <Style>
      <div className="numbers_cards">
        <Card
          label={t('doctors.label')}
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
      <LatestConsultations />
    </Style>
  )
}

export default Home