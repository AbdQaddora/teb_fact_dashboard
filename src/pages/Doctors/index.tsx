import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import DOCTORS_COLUMNS from '../../constants/doctors_columns';

// mock
import doctorsMock from '../../mock/doctors.json';
import Input from '../../components/tiny/Input';
import Style from './style';

const Doctors = () => {
  const [latestConsultations, setLatestConsultations] = useState(doctorsMock);
  const { t } = useTranslation("", { keyPrefix: "doctors" })
  const [filter, setFilter] = useState("");

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }

  return (
    <Style>
      <H4 margin='1rem 0 2rem'>{t("title")}</H4>
      <div className="search_block">
        <Input
          fullWidth
          className='search_input'
          value={filter}
          onChange={handelChange}
          placeholder={t("search") as string}
        />
      </div>
      <TableSection
        filterValue={filter}
        title={t("subTitle")}
        columns={DOCTORS_COLUMNS}
        data={latestConsultations}
      />
    </Style>
  )
}

export default Doctors