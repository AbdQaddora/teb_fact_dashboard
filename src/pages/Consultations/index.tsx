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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ConsultationsAPI.getConsultations(activePage, pageSize)
      .then((res) => {
        if (res?.status && res?.data) {
          setConsultations(res?.data);
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
    <div>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <TableSection
        title={t("subTitle")}
        columns={LATEST_CONSULTATIONS_COLUMNS}
        data={consultations}
        isLoading={isLoading}
        pagination={{
          activePage,
          pageSize,
          setActivePage,
          setPageSize,
          totalCount: totalConsultationsCount
        }}
      />
    </div>
  )
}

export default Consultations