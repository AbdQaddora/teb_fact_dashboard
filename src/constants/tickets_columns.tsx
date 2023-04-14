import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';
import Button from '../components/tiny/Button';
import CustomLink from '../components/tiny/CustomLink';
import { Link } from 'react-router-dom';
import { PATHS } from '../router';

export interface IDataReports {
    ticket_id: string;
    patient_name: string,
    patient_avatar: string,
    patient_email: string;
    patient_phone: string;
    ticket: string;
}

const TICKETS_COLUMNS: Column<IDataReports>[] = [
    {
        Header: () => <Translate TranslateKey='tables.tickets.name' />,
        accessor: "patient_name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.patient_name} avatar={row.original.patient_avatar} />,
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.email' />,
        accessor: "patient_email",
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.phone' />,
        accessor: "patient_phone",
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.message' />,
        accessor: "ticket",
        Cell: ({ value }) => <>{value.split(" ").slice(0, 20).join(" ")}...</>,
        minWidth: 500
    },
    {
        Header: () => <Translate TranslateKey='tables.tickets.actions' />,
        accessor: "ticket_id",
        minWidth: 100,
        disableSortBy: true,
        Cell: ({ value }) => <Link to={PATHS.TICKET + "/" + value}>
            <Button>
                <Translate TranslateKey='tables.tickets.response' />
            </Button>
        </Link>
        ,
    }
];

export default TICKETS_COLUMNS;