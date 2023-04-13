import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';

import TICKETS_COLUMNS from '../../constants/tickets_columns';
// mock
import ticketsMock from '../../mock/tickets.json';

const Tickets = () => {
  const [ticketsData, setTicketsData] = useState(ticketsMock);
  const { t } = useTranslation("", { keyPrefix: "tickets" })
  return (
    <div>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <TableSection
        title={t("subTitle")}
        columns={TICKETS_COLUMNS}
        data={ticketsData}
      />
    </div>
  )
}

export default Tickets