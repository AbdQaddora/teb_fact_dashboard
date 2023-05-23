import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';
import DoctorsTableActions from '../components/tables_actions/DoctorsTableActions';
import Rating from '../components/tiny/Rating';

const DOCTORS_COLUMNS: Column<IDoctor>[] = [
    {
        Header: () => <Translate TranslateKey='tables.doctors.name' />,
        accessor: "name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.name} avatar={row.original.avatar} />,
        maxWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.email' />,
        accessor: "email",
        maxWidth: 200,
        Cell: ({ value }) => <p style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}>{value}</p>
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.phone' />,
        accessor: "phone",
        disableGlobalFilter: true,
        minWidth: 120
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.rating' />,
        accessor: "rating",
        disableGlobalFilter: true,
        Cell: ({ value }) => <Rating rating={value} />,
        maxWidth: 150
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.max_open_consultations' />,
        accessor: "max_open_consultations",
        disableGlobalFilter: true,
        minWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.graduation_GPA' />,
        accessor: "graduation_gpa",
        disableGlobalFilter: true,
        minWidth: 100
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.actions' />,
        accessor: "id",
        maxWidth: 200,
        disableGlobalFilter: true,
        disableSortBy: true,
        Cell: ({ row }) => <DoctorsTableActions
            id={row.original.id}
            name={row.original.name}
            avatar={row.original.avatar}
        />
        ,
    }
];

export default DOCTORS_COLUMNS;