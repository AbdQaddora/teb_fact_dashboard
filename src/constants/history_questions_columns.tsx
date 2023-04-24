import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import HistoryQuestionsActions from '../components/tables_actions/HistoryQuestionsActions';
import { Body1 } from '../components/tiny/Typography/style';

export interface IDataLatestConsultation {
    question_id: string,
    question: string,
}

const HISTORY_QUESTIONS_COLUMNS: Column<IDataLatestConsultation>[] = [
    {
        Header: "#",
        accessor: (row, i) => <Body1 weight={500}>{i + 1}.</Body1>,
        width: '20px',
        disableSortBy: true
    },
    {
        Header: () => <Translate TranslateKey='tables.history_question.question' />,
        accessor: "question",
        maxWidth: 700,
        width: "calc(100% - 170px)",
        Cell: ({ value }) => {
            return <Body1 weight={500}>{value}</Body1>
        }
    }
    , {
        Header: () => <Translate TranslateKey='tables.history_question.actions' />,
        accessor: "question_id",
        width: "150px",
        disableSortBy: true,
        Cell: ({ value }) => {
            return <HistoryQuestionsActions
                editBtnText='components.table_actions.edit'
                removeBtnText='components.table_actions.remove'
                id={value}
            />
        }
    },
];

export default HISTORY_QUESTIONS_COLUMNS;