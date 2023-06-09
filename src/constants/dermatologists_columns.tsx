import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';
import DermatologistsTableActions from '../components/tables_actions/DermatologistsTableActions';
import Rating from '../components/tiny/Rating';

const DOCTORS_COLUMNS: Column<IDermatologistColumns>[] = [
    {
        Header: () => <Translate TranslateKey='tables.dermatologists.name' />,
        accessor: "full_name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.full_name} avatar={row.original.profile_image} />,
        minWidth: 220,
    },
    {
        Header: () => <Translate TranslateKey='tables.dermatologists.email' />,
        accessor: "email",
        minWidth: 200,
        Cell: ({ value }) => <p style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}>{value}</p>
    },
    {
        Header: () => <Translate TranslateKey='tables.dermatologists.rating' />,
        accessor: "rating",
        disableGlobalFilter: true,
        Cell: ({ value }) => <Rating rating={value} />,
        minWidth: 130
    },
    {
        Header: () => <Translate TranslateKey='tables.dermatologists.consultations_count' />,
        accessor: "consultations_count",
        disableGlobalFilter: true,
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.dermatologists.max_open_consultations' />,
        accessor: "maximum_no_of_open_consultations",
        disableGlobalFilter: true,
        minWidth: 220
    },
    {
        Header: () => <Translate TranslateKey='tables.dermatologists.actions' />,
        accessor: "id",
        minWidth: 200,
        disableGlobalFilter: true,
        disableSortBy: true,
        Cell: ({ row }) => <DermatologistsTableActions
            id={row.original.id}
            name={row.original.full_name}
            avatar={row.original.profile_image}
        />
        ,
    }
];

export default DOCTORS_COLUMNS;