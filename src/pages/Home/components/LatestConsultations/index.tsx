import React, { useState } from 'react'
import Table from '../../../../components/Table'
import LATEST_CONSULTATIONS_COLUMNS_HOME from "../../../../constants/latest_consultations_columns_home";

// mock
import latest_consultations from "../../../../mock/latest_consultations_home.json";

const LatestConsultations = () => {
    const [latestConsultations, setLatestConsultations] = useState(latest_consultations)
    return (
        <Table
            columns={LATEST_CONSULTATIONS_COLUMNS_HOME}
            data={latestConsultations}
        />
    )
}

export default LatestConsultations