import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import Button from '../components/tiny/Button';
import { Link } from 'react-router-dom';
import { PATHS } from '../router';

const TICKETS_COLUMNS: Column<ITicket>[] = [
    {
        Header: () => <Translate TranslateKey='tables.tickets.name' />,
        accessor: "full_name",
        minWidth: 150,
        maxWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.email' />,
        accessor: "email",
        Cell: ({ value }) => <p style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}>{value}</p>,
        width: 150
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.message' />,
        accessor: "message",
        Cell: ({ value }) => <>{value.split(" ").slice(0, 20).join(" ")}...</>,
        maxWidth: 700,
        minWidth: 450
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.actions' />,
        accessor: "id",
        maxWidth: 150,
        minWidth: 100,
        disableSortBy: true,
        Cell: ({ value }) => <Link to={PATHS.TICKET + "/" + value}>
            <Button>
                <Translate TranslateKey='components.table_actions.response' />
            </Button>
        </Link>
        ,
    }
];

export default TICKETS_COLUMNS;