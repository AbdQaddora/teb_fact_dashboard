import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import STATIC_PAGES_COLUMNS from '../../constants/static_pages_columns';
import { getAllPages, selectStaticPages } from '../../redux/slices/staticPagesSlice';

import { PATHS } from '../../router';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const StaticPages = () => {
    const { pages, updated_at, totalPagesCount, pages_requests_state } = useAppSelector(selectStaticPages);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();


    const [pageSize, setPageSize] = useState(10);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        dispatch(getAllPages(activePage, pageSize));
    }, [pageSize, activePage])

    useEffect(() => {
        if (pages_requests_state.error) {
            toast.error(pages_requests_state.error)
        }
    }, [pages_requests_state.error])

    return (
        <Style>
            <div>
                <H4 margin='1rem 0 2rem'>{t("static_pages.static_pages")}</H4>
                <TableSection
                    isLoading={pages_requests_state.loading}
                    updated_at={updated_at}
                    addNew={() => { navigate(PATHS.NEW_STATIC_PAGE) }}
                    title={t("static_pages.pages")}
                    columns={STATIC_PAGES_COLUMNS}
                    data={pages}
                    pagination={{
                        activePage,
                        pageSize,
                        setActivePage,
                        setPageSize,
                        totalCount: totalPagesCount
                    }}
                />
            </div>
        </Style >
    )
}

export default StaticPages