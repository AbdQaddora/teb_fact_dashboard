import React, { useState, useEffect } from 'react'
import TableSection from '../../../../components/TableSection';
import { useTranslation } from 'react-i18next';
// columns
import LATEST_CONSULTATIONS_COLUMNS from '../../../../constants/latest_consultations_columns';
import { toast } from 'react-toastify';
import ConsultationsAPI from '../../../../api/consultations';

const LatestConsultations = () => {
    const [latestConsultations, setLatestConsultations] = useState<IConsultation[]>([]);
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [pageSize, setPageSize] = useState(10);
    const [activePage, setActivePage] = useState(1);
    const [totalConsultationsCount, setTotalConsultationsCount] = useState(0);


    useEffect(() => {
        setIsLoading(true);
        ConsultationsAPI.getLatestConsultations(activePage, pageSize)
            .then((res) => {
                if (res?.status && res?.data) {
                    setLatestConsultations(res?.data)
                    console.log(res?.data)
                    setTotalConsultationsCount(res.totalConsultationsCount)
                } else {
                    toast.error(res?.message)
                }
            }).catch((error) => {
                toast.error(error?.message)
            }).finally(() => {
                setIsLoading(false);
            })
    }, [pageSize, activePage])

    return (
        <TableSection
            title={t("home.latest_consultations")}
            columns={LATEST_CONSULTATIONS_COLUMNS}
            data={latestConsultations}
            isLoading={isLoading}
            pagination={{
                activePage,
                pageSize,
                setActivePage,
                setPageSize,
                totalCount: totalConsultationsCount
            }}
        />
    )
}

export default LatestConsultations