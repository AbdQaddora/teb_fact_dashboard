import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
    getQuestions,
    nextPage,
    previousPage,
    selectHistoryQuestions,
    setPageSize
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
        pageSize } = useAppSelector(selectHistoryQuestions);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getQuestions());
    }, [pageSize, activePage])


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
                            next: () => dispatch(nextPage()),
                            previous: () => dispatch(previousPage()),
                            setPageSize: (page_size) => dispatch(setPageSize(page_size)),
                            totalCount: totalQuestionsCount
                        }}
                    />
                </div>
            </Style >
        </>
    )
}

export default HistoryQuestions