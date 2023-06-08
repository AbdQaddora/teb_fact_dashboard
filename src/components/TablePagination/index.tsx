import React from 'react'
import { Body1, Body2 } from '../tiny/Typography/style'
import Select from 'react-select';
import Style from './style';

// icons
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../context/LanguageContext';
interface IProps {
    pageIndex: number,
    pageSize: number,
    pageCount: number,
    setPageSize: (pageSize: number) => void,
    previousPage: () => void,
    nextPage: () => void,
}

const pageSizeOptions = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
];

const TablePagination = ({ pageIndex, pageCount, pageSize, nextPage, previousPage, setPageSize }: IProps) => {
    const { t } = useTranslation("", { keyPrefix: "components.table_pagination" })
    const { lang: { direction } } = useLang();
    return (
        <Style>
            <div className='rows_pre_page'>
                <Body1 className='count'>{t("rows_per_page")}</Body1>
                <div className="page_size_select">
                    <Select
                        value={{ value: pageSize, label: pageSize }}
                        onChange={(val) => setPageSize(val?.value as number)}
                        options={pageSizeOptions}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 4,
                            colors: {
                                ...theme.colors,
                                primary: '#3832A0',
                            },
                        })}
                    />
                </div>
            </div>


            <div className="buttons">
                <button className="table_pagination_btn" onClick={previousPage}>
                    {direction === 'ltr' ? <GrPrevious className='icon' /> : <GrNext className='icon' />}
                </button>
                <Body1 className='count_text'>{pageIndex} {t("of")} {pageCount}</Body1>
                <button className="table_pagination_btn" onClick={nextPage}>
                    {direction === 'ltr' ? <GrNext className='icon' /> : <GrPrevious className='icon' />}
                </button>
            </div>
        </Style>
    )
}

export default TablePagination