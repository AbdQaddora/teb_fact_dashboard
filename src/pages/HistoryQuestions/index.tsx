import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../context/LanguageContext';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllQuestions, selectHistoryQuestions } from '../../redux/slices/historyQuestionsSlice';

import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import HISTORY_QUESTIONS_COLUMNS from '../../constants/history_questions_columns';
import Modal from '../../components/Modal';
import HistoryQuestionModal from '../../components/modals/HistoryQuestionModal';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const HistoryQuestions = () => {
    const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
    const { questions, updated_at } = useAppSelector(selectHistoryQuestions);
    const dispatch = useAppDispatch();

    const { t } = useTranslation();
    const { lang } = useLang();

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [])

    return (
        <>
            {isNewQuestionModalOpen && <Modal close={() => setIsNewQuestionModalOpen(false)}>
                <HistoryQuestionModal
                    close={() => setIsNewQuestionModalOpen(false)}
                />
            </Modal>}
            <Style>
                <div>
                    <H4 margin='1rem 0 2rem'>{t("history_questions.title")}</H4>
                    <TableSection
                        updated_at={updated_at}
                        addNew={() => { setIsNewQuestionModalOpen(true) }}
                        title={t("history_questions.subTitle")}
                        columns={HISTORY_QUESTIONS_COLUMNS}
                        data={questions}
                    />
                </div>
            </Style >
        </>
    )
}

export default HistoryQuestions