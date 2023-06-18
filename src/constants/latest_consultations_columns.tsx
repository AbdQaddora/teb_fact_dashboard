import { CellProps, Column } from 'react-table';
import ConsultationTypeBadge from '../components/tiny/ConsultationTypeBadge';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';

const LATEST_CONSULTATIONS_COLUMNS: Column<IConsultation>[] = [
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.name' />,
        accessor: "patient_name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.patient_name} avatar={row.original.patient_avatar} />,
        minWidth: 150,
        maxWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.email' />,
        accessor: "patient_email",
        Cell: ({ value }) => <p style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}>{value}</p>,
        width: 150
    },
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.consultation' />,
        accessor: "consultation",
        Cell: ({ value }) => <>{value.split(" ").slice(0, 20).join(" ")}...</>,
        minWidth: 350,
        maxWidth: 700,
    },
    {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.state' />,
        accessor: "state",
        Cell: ({ cell: { value } }: CellProps<any>) => {
            return <ConsultationTypeBadge type={value} />
        },
        width: 100
    }, {
        Header: () => <Translate TranslateKey='tables.latest_consultations_columns.date' />,
        accessor: "date",
        minWidth: 80,
        maxWidth: 100
    },
];

export default LATEST_CONSULTATIONS_COLUMNS;