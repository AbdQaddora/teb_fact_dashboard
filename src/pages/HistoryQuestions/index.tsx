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
import NewHistoryQuestionModal from '../../components/modals/NewHistoryQuestionModal';

const HistoryQuestions = () => {
    const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
    const { questions } = useAppSelector(state => state.historyQuestions);
    const dispatch = useAppDispatch();


    const { t } = useTranslation("", { keyPrefix: "history_questions" });
    const { lang } = useLang();

    useEffect(() => {
        dispatch(getAllQuestions())
    }, [])

    return (
        <>
            {isNewQuestionModalOpen && <Modal close={() => setIsNewQuestionModalOpen(false)}>
                <NewHistoryQuestionModal
                    close={() => setIsNewQuestionModalOpen(false)}
                />
            </Modal>}
            <Style>
                <div>
                    <H4 margin='1rem 0 2rem'>{t("title")}</H4>
                    <TableSection
                        addNew={() => { setIsNewQuestionModalOpen(true) }}
                        title={t("subTitle")}
                        columns={HISTORY_QUESTIONS_COLUMNS}
                        data={questions.map(el => ({
                            question_id: el.id,
                            question: el[lang.langName].question
                        }))}
                    />
                </div>
            </Style>
        </>
    )
}

export default HistoryQuestions