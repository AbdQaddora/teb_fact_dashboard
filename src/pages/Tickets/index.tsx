import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import TicketsAPI from '../../api/tickets';

import TICKETS_COLUMNS from '../../constants/tickets_columns';


const Tickets = () => {
  const [ticketsData, setTicketsData] = useState<ITicket[]>([]);
  const { t } = useTranslation("", { keyPrefix: "tickets" })
  const [updated_at, setUpdated_at] = useState(`${Date.now()}`);
  const [isLoading, setIsLoading] = useState(false);

  const [pageSize, setPageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [totalTicketsCount, setTotalTicketsCount] = useState(0);

  const next = () => {
    if (activePage + 1 <= Math.ceil(totalTicketsCount / pageSize)) {
      setActivePage(activePage + 1);
    }
  }

  const previous = () => {
    setActivePage(activePage - 1 > 0 ? activePage - 1 : activePage)
  }

  const customSetPageSize = (newPageSize: number) => {
    if (Math.floor(totalTicketsCount / newPageSize) > 0) {
      setActivePage(Math.floor(totalTicketsCount / newPageSize));
    } else {
      setActivePage(1);
    }

    setPageSize(newPageSize);
  }

  useEffect(() => {
    setIsLoading(true);
    TicketsAPI.getTickets(activePage, pageSize)
      .then((res) => {
        setTicketsData(res?.data);
        setTotalTicketsCount(res?.totalTicketsCount);
        setUpdated_at(`${Date.now()}`);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [pageSize, activePage])

  return (
    <div>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <TableSection
        title={t("subTitle")}
        columns={TICKETS_COLUMNS}
        data={ticketsData}
        updated_at={updated_at}
        isLoading={isLoading}
        pagination={{
          activePage,
          pageSize,
          next,
          previous,
          setPageSize: customSetPageSize,
          totalCount: totalTicketsCount
        }}
      />
    </div>
  )
}

export default Tickets