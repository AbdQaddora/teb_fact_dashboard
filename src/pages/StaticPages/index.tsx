import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import STATIC_PAGES_COLUMNS from '../../constants/static_pages_columns';
import { STATIC_PAGES_ACTIONS, selectStaticPages } from '../../redux/slices/staticPagesSlice';

import { PATHS } from '../../router';
import { useNavigate } from 'react-router-dom';

const StaticPages = () => {
    const { pages, is_initial_data_fetched, updated_at, totalPagesCount, pages_requests_state, activePage, pageSize } = useAppSelector(selectStaticPages);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    useEffect(() => {
        if (!is_initial_data_fetched) {
            dispatch(STATIC_PAGES_ACTIONS.getAllPages())
        }
    }, [])
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
                        next: () => { dispatch(STATIC_PAGES_ACTIONS.nextPage()) },
                        previous: () => { dispatch(STATIC_PAGES_ACTIONS.previousPage()) },
                        setPageSize: (size: number) => { dispatch(STATIC_PAGES_ACTIONS.setPageSize(size)) },
                        totalCount: totalPagesCount
                    }}
                />
            </div>
        </Style >
    )
}

export default StaticPages