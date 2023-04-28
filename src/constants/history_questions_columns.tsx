import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import HistoryQuestionsActions from '../components/tables_actions/HistoryQuestionsActions';
import { Body1 } from '../components/tiny/Typography/style';
import { IQuestion } from '../types/HistoryQuestion';
import { useLang } from '../context/LanguageContext';

const HISTORY_QUESTIONS_COLUMNS: Column<IQuestion>[] = [
    {
        Header: "#",
        accessor: (row, i) => <Body1 weight={500}>{i + 1}.</Body1>,
        width: '20px',
        disableSortBy: true
    },
    {
        Header: () => <Translate TranslateKey='tables.history_question.question' />,
        accessor: "id",
        maxWidth: 700,
        minWidth: 450,
        width: "calc(100% - 170px)",
        Cell: ({ row }) => <QuestionCell data={row.original} />
    }
    , {
        Header: () => <Translate TranslateKey='tables.history_question.actions' />,
        accessor: "ar",
        width: "150px",
        disableSortBy: true,
        Cell: ({ row }) => {
            return <HistoryQuestionsActions
                editBtnText='components.table_actions.edit'
                removeBtnText='components.table_actions.remove'
                data={row.original}
            />
        }
    },
];

const QuestionCell = ({ data }: { data: IQuestion }) => {
    const { lang } = useLang();
    return <Body1 weight={500}>
        {data[lang.langName].question}
    </Body1>
}

export default HISTORY_QUESTIONS_COLUMNS;