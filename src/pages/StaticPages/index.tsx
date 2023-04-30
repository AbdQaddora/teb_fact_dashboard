import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../context/LanguageContext';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import STATIC_PAGES_COLUMNS from '../../constants/static_pages_columns';
import { getAllPages, selectStaticPages } from '../../redux/slices/staticPagesSlice';

import { PATHS } from '../../router';
import { useNavigate } from 'react-router-dom';

const StaticPages = () => {
    const { pages, updated_at } = useAppSelector(selectStaticPages);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { lang } = useLang();

    useEffect(() => {
        dispatch(getAllPages());
    }, [])

    return (
        <Style>
            <div>
                <H4 margin='1rem 0 2rem'>{t("history_questions.title")}</H4>
                <TableSection
                    updated_at={updated_at}
                    addNew={() => { navigate(PATHS.NEW_STATIC_PAGE) }}
                    title={t("history_questions.subTitle")}
                    columns={STATIC_PAGES_COLUMNS}
                    data={pages}
                />
            </div>
        </Style >
    )
}

export default StaticPages