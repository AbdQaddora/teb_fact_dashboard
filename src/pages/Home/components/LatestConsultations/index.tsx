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
    const [updated_at, setUpdated_at] = useState(`${Date.now()}`);
    const [totalConsultationsCount, setTotalConsultationsCount] = useState(0);

    const next = () => {
        if (activePage + 1 <= Math.ceil(totalConsultationsCount / pageSize)) {
            setActivePage(activePage + 1);
        }
    }

    const previous = () => {
        setActivePage(activePage - 1 > 0 ? activePage - 1 : activePage)
    }

    const customSetPageSize = (newPageSize: number) => {
        if (Math.floor(totalConsultationsCount / newPageSize) > 0) {
            setActivePage(Math.floor(totalConsultationsCount / newPageSize));
        } else {
            setActivePage(1);
        }

        setPageSize(newPageSize);
    }

    useEffect(() => {
        setIsLoading(true);
        ConsultationsAPI.getLatestConsultations(activePage, pageSize)
            .then((res) => {
                console.log({ res })
                if (res?.status && res?.data) {
                    setLatestConsultations(res?.data)
                    setUpdated_at(`${Date.now()}`)
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
            updated_at={updated_at}
            pagination={{
                activePage,
                pageSize,
                next,
                previous,
                setPageSize: customSetPageSize,
                totalCount: totalConsultationsCount
            }}
        />
    )
}

export default LatestConsultations