import React, { useEffect, useState } from 'react'
import { H4 } from '../../components/tiny/Typography/style'
import LATEST_CONSULTATIONS_COLUMNS from '../../constants/latest_consultations_columns'
import { useTranslation } from 'react-i18next'
import TableSection from '../../components/TableSection'
import ConsultationsAPI from '../../api/consultations';
import { toast } from 'react-toastify';

const Consultations = () => {
  const { t } = useTranslation("", { keyPrefix: "latest_consultations" });

  const [consultations, setConsultations] = useState<IConsultation[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [totalConsultationsCount, setTotalConsultationsCount] = useState(0);

  const [updated_at, setUpdated_at] = useState(`${Date.now()}`);
  const [isLoading, setIsLoading] = useState(false);
  
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
    ConsultationsAPI.getConsultations(activePage, pageSize)
      .then((res) => {
        if (res?.status && res?.data) {
          setConsultations(res?.data);
          setTotalConsultationsCount(res.totalConsultationsCount);
          setUpdated_at(`${Date.now()}`);
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
    <div>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <TableSection
        title={t("subTitle")}
        columns={LATEST_CONSULTATIONS_COLUMNS}
        data={consultations}
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
    </div>
  )
}

export default Consultations