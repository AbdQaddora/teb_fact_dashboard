import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import DOCTORS_COLUMNS from '../../constants/dermatologists_columns';
import Input from '../../components/tiny/Input';
import { useDebounce } from 'usehooks-ts'


import { getDermatologists, nextPage, previousPage, searchInDermatologists, selectDermatologists, setPageSize } from '../../redux/slices/dermatologistsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Style from './style';
const Dermatologists = () => {
  const { dermatologists, updated_at, activePage, pageSize, isLoading, totalDermatologistsCount } = useAppSelector(selectDermatologists);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("", { keyPrefix: "dermatologists" })

  const [filter, setFilter] = useState<string>("");
  const debouncedQuery = useDebounce<string>(filter, 500);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }

  useEffect(() => {
    if (dermatologists.length === 0) {
      dispatch(getDermatologists())
    }
  }, [])

  useEffect(() => {
    dispatch(getDermatologists())
  }, [activePage, pageSize])

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchInDermatologists(debouncedQuery))
    } else {
      dispatch(getDermatologists())
    }
  }, [debouncedQuery])

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
        title={t("subTitle")}
        columns={DOCTORS_COLUMNS}
        data={dermatologists as IDermatologistColumns[]}
        isLoading={isLoading}
        pagination={{
          activePage,
          pageSize,
          next: () => dispatch(nextPage()),
          previous: () => dispatch(previousPage()),
          setPageSize: (page_size) => dispatch(setPageSize(page_size)),
          totalCount: totalDermatologistsCount
        }}
      />
    </Style>
  )
}

export default Dermatologists