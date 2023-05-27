import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getQuestions, selectHistoryQuestions } from '../../redux/slices/historyQuestionsSlice';

import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import HISTORY_QUESTIONS_COLUMNS from '../../constants/history_questions_columns';
import Modal from '../../components/Modal';
import HistoryQuestionModal from '../../components/modals/HistoryQuestionModal';
import TablePagination from '../../components/TablePagination';

const HistoryQuestions = () => {
    const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
    const { t } = useTranslation();

    const { questions, updated_at, totalQuestionsCount } = useAppSelector(selectHistoryQuestions);
    const dispatch = useAppDispatch();

    const [pageSize, setPageSize] = useState(10);
    const [activePage, setActivePage] = useState(1);


    useEffect(() => {
        dispatch(getQuestions(activePage, pageSize));
    }, [pageSize, activePage])

    const nextPage = () => {
        setActivePage(prev => prev + 1 <= Math.ceil(totalQuestionsCount / pageSize) ? prev + 1 : prev)
    }

    const prevPage = () => {
        setActivePage(prev => prev - 1 > 0 ? prev - 1 : prev)
    }
    
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
                        Pagination={<TablePagination
                            nextPage={nextPage}
                            pageCount={Math.ceil(totalQuestionsCount / pageSize)}
                            pageIndex={activePage}
                            pageSize={pageSize}
                            previousPage={prevPage}
                            setPageSize={setPageSize}
                        />}
                    />
                </div>
            </Style >
        </>
    )
}

export default HistoryQuestions