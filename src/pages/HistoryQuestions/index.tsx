import React, { useState } from 'react'
import Style from './style'
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import { useTranslation } from 'react-i18next';
import historyQuestionsMock from '../../mock/history_questions.json';
import HISTORY_QUESTIONS_COLUMNS from '../../constants/history_questions_columns';
import { useLang } from '../../context/LanguageContext';

const HistoryQuestions = () => {
    const [historyQuestions, setHistoryQuestions] = useState(historyQuestionsMock);
    const { t } = useTranslation("", { keyPrefix: "latest_consultations" });
    const { lang } = useLang();
    
    return (
        <Style>
            <div>
                <H4 margin='1rem 0 2rem'>{t("title")}</H4>
                <TableSection
                    title={t("subTitle")}
                    columns={HISTORY_QUESTIONS_COLUMNS}
                    data={historyQuestions.map(el => ({
                        question_id: el.question_id,
                        question: el[lang.langName].question
                    }))}
                />
            </div>
        </Style>
    )
}

export default HistoryQuestions