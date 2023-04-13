import React, { useState } from 'react'
import { H4, H5 } from '../../components/tiny/Typography/style'
import Style from './style'
import Table from '../../components/Table'
import LATEST_CONSULTATIONS_COLUMNS from '../../constants/latest_consultations_columns'
import latestConsultationsMock from '../../mock/latest_consultations.json';
import { useTranslation } from 'react-i18next'

const Consultations = () => {
  const [latestConsultations, setLatestConsultations] = useState(latestConsultationsMock);
  const { t } = useTranslation("", { keyPrefix: "latest_consultations" })
  return (
    <Style>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <div className="table_section">
        <H5 margin='0 1rem 1rem'>{t("subTitle")}</H5>
        <Table
          columns={LATEST_CONSULTATIONS_COLUMNS}
          data={latestConsultations}
        />
      </div>
    </Style>
  )
}

export default Consultations