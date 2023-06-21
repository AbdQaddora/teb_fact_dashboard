import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
    HISTORY_QUESTIONS_ACTIONS, selectHistoryQuestions
} from '../../redux/slices/historyQuestionsSlice';

import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import HISTORY_QUESTIONS_COLUMNS from '../../constants/history_questions_columns';
import Modal from '../../components/Modal';
import HistoryQuestionModal from '../../components/modals/HistoryQuestionModal';

const HistoryQuestions = () => {
    const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
    const { t } = useTranslation();

    const { questions,
        updated_at,
        totalQuestionsCount,
        activePage,
        isLoading,
        pageSize,
        is_initial_data_fetched } = useAppSelector(selectHistoryQuestions);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!is_initial_data_fetched) {
            dispatch(HISTORY_QUESTIONS_ACTIONS.getQuestions());
        }
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
                        isLoading={isLoading}
                        pagination={{
                            activePage,
                            pageSize,
                            next: () => dispatch(HISTORY_QUESTIONS_ACTIONS.nextPage()),
                            previous: () => dispatch(HISTORY_QUESTIONS_ACTIONS.previousPage()),
                            setPageSize: (page_size) => dispatch(HISTORY_QUESTIONS_ACTIONS.setPageSize(page_size)),
                            totalCount: totalQuestionsCount
                        }}
                    />
                </div>
            </Style >
        </>
    )
}

export default HistoryQuestions