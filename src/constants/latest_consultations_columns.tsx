import { CellProps, Column } from 'react-table';
import ConsultationTypeBadge from '../components/tiny/ConsultationTypeBadge';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';

export interface IDataLatestConsultation {
    id: string,
    patient_name: string,
    patient_avatar: string,
    patient_email: string;
    consultation: string;
    state: string;
    date: string;
}

const LATEST_CONSULTATIONS_COLUMNS: Column<IDataLatestConsultation>[] = [
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.name' />,
        accessor: "patient_name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.patient_name} avatar={row.original.patient_avatar} />,
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.email' />,
        accessor: "patient_email",
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.consultation' />,
        accessor: "consultation",
        Cell: ({ value }) => <>{value.split(" ").slice(0, 20).join(" ")}...</>,
        minWidth: 450
    },
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.state' />,
        accessor: "state",
        Cell: ({ cell: { value } }: CellProps<any>) => {
            return <ConsultationTypeBadge type={value} />
        },
        minWidth: 100
    }, {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.date' />,
        accessor: "date",
        minWidth: 100
    },
];

export default LATEST_CONSULTATIONS_COLUMNS;