import React, { useState } from 'react'
import Table from '../../../../components/Table'
import LATEST_CONSULTATIONS_COLUMNS from "../../../../constants/latest_consultations_columns";

// mock
import latest_consultations from "../../../../mock/latest_consultations.json";

const LatestConsultations = () => {
    const [latestConsultations, setLatestConsultations] = useState(latest_consultations)
    return (
        <Table
            columns={LATEST_CONSULTATIONS_COLUMNS}
            data={latestConsultations}
        />
    )
}

export default LatestConsultations