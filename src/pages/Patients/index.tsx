import React, { useState, useEffect } from 'react'
import Style from './style'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { _setPageSize, getPatients, nextPage, previousPage, searchInPatients, selectPatients } from '../../redux/slices/patientsSlice';
import PATIENTS_COLUMNS from '../../constants/patients_columns';
import { H4 } from '../../components/tiny/Typography/style';
import Input from '../../components/tiny/Input';
import TableSection from '../../components/TableSection';
import { useTranslation } from 'react-i18next';
import { useDebounce } from 'usehooks-ts';

const Patients = () => {
    const { patients, updated_at, activePage, pageSize, isLoading, totalPatientsCount } = useAppSelector(selectPatients);
    const dispatch = useAppDispatch();

    const { t } = useTranslation("", { keyPrefix: "patients" })

    const [filter, setFilter] = useState<string>("");
    const debouncedQuery = useDebounce<string>(filter, 500);

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        if (patients.length === 0) {
            dispatch(getPatients())
        }
    }, [])

    useEffect(() => {
        dispatch(getPatients())
    }, [pageSize, activePage])

    useEffect(() => {
        if (debouncedQuery) {
            dispatch(searchInPatients(debouncedQuery))
        } else {
            dispatch(getPatients())
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
                columns={PATIENTS_COLUMNS}
                data={patients as IPatientColumns[]}
                isLoading={isLoading}
                pagination={{
                    activePage,
                    pageSize,
                    next: () => dispatch(nextPage()),
                    previous: () => dispatch(previousPage()),
                    setPageSize: (page_size) => dispatch(_setPageSize(page_size)),
                    totalCount: totalPatientsCount
                }}
            />
        </Style>
    )
}

export default Patients