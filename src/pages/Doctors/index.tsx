import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import DOCTORS_COLUMNS from '../../constants/doctors_columns';
import Input from '../../components/tiny/Input';


import { getAllDoctors, selectDoctors } from '../../redux/slices/doctorsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Style from './style';
const Doctors = () => {
  const { doctors, updated_at } = useAppSelector(selectDoctors);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("", { keyPrefix: "doctors" })
  const [filter, setFilter] = useState("");

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(getAllDoctors())
    }
  }, [])


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
        updated_at={updated_at}
        filterValue={filter}
        title={t("subTitle")}
        columns={DOCTORS_COLUMNS}
        data={doctors as IDoctor[]}
      />
    </Style>
  )
}

export default Doctors