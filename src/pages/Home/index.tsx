import React from 'react'
import LatestConsultations from './components/LatestConsultations'
import Style from './style';
import { useTranslation } from 'react-i18next';

import InfoSection from './components/InfoSection';

const Home = () => {
  const { t } = useTranslation("", { keyPrefix: "home.cards" });
  return (
    <Style>
      <InfoSection />
      <LatestConsultations />
    </Style>
  )
}

export default Home