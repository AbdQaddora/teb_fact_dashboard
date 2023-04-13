import React, { useState } from 'react'
import { H4 } from '../../components/tiny/Typography/style'
import LATEST_CONSULTATIONS_COLUMNS from '../../constants/latest_consultations_columns'
import latestConsultationsMock from '../../mock/latest_consultations.json';
import { useTranslation } from 'react-i18next'
import TableSection from '../../components/TableSection'

const Consultations = () => {
  const [latestConsultations, setLatestConsultations] = useState(latestConsultationsMock);
  const { t } = useTranslation("", { keyPrefix: "latest_consultations" })
  return (
    <div>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <TableSection
        title={t("subTitle")}
        columns={LATEST_CONSULTATIONS_COLUMNS}
        data={latestConsultations}
      />
    </div>
  )
}

export default Consultations