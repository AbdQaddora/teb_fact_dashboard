import React, { useState } from 'react'
import TableSection from '../../../../components/TableSection';
// columns
import LATEST_CONSULTATIONS_COLUMNS_HOME from "../../../../constants/latest_consultations_columns_home";
// mock
import latest_consultations from "../../../../mock/latest_consultations_home.json";
import { useTranslation } from 'react-i18next';

const LatestConsultations = () => {
    const [latestConsultations, setLatestConsultations] = useState(latest_consultations);
    const { t } = useTranslation();

    return (
        <TableSection
            title={t("home.latest_consultations")}
            columns={LATEST_CONSULTATIONS_COLUMNS_HOME}
            data={latestConsultations}
        />
    )
}

export default LatestConsultations