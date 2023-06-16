import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';
import DermatologistsTableActions from '../components/tables_actions/DermatologistsTableActions';
import PatientsTableActions from '../components/tables_actions/PatientsTableActions';

const PATIENTS_COLUMNS: Column<IPatientColumns>[] = [
    {
        Header: () => <Translate TranslateKey='tables.patients.name' />,
        accessor: "full_name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.full_name} avatar={row.original.profile_image} />,
        minWidth: 220,
    },
    {
        Header: () => <Translate TranslateKey='tables.patients.email' />,
        accessor: "email",
        minWidth: 200,
        Cell: ({ value }) => <p style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}>{value}</p>
    },
    {
        Header: () => <Translate TranslateKey='tables.patients.mobile_number' />,
        accessor: "mobile_number",
        disableGlobalFilter: true,
        minWidth: 130
    },
    {
        Header: () => <Translate TranslateKey='tables.patients.consultations_count' />,
        accessor: "consultations_count",
        disableGlobalFilter: true,
        minWidth: 150
    },
    {
        Header: () => <Translate TranslateKey='tables.patients.open_consultations' />,
        accessor: "open_consultations",
        disableGlobalFilter: true,
        minWidth: 170
    },
    {
        Header: () => <Translate TranslateKey='tables.patients.actions' />,
        accessor: "id",
        minWidth: 200,
        disableGlobalFilter: true,
        disableSortBy: true,
        Cell: ({ row }) => <PatientsTableActions
            id={row.original.id}
            name={row.original.full_name}
            avatar={row.original.profile_image}
        />
        ,
    }
];

export default PATIENTS_COLUMNS;