import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import NameAndAvatarCell from '../components/tiny/NameAndAvatar';
import Button from '../components/tiny/Button';
import CustomLink from '../components/tiny/CustomLink';
import { Link } from 'react-router-dom';
import { PATHS } from '../router';
import DoctorsTableActions from '../components/DoctorsTableActions';
import Rating from '../components/tiny/Rating';

export interface IDataReports {
    id: string;
    name: string,
    avatar: string,
    email: string;
    phone: string;
    rating: number;
    consulting_count: number;
    last_consultation_date: string;
}

const DOCTORS_COLUMNS: Column<IDataReports>[] = [
    {
        Header: () => <Translate TranslateKey='tables.doctors.name' />,
        accessor: "name",
        Cell: ({ row }) => <NameAndAvatarCell name={row.original.name} avatar={row.original.avatar} />,
        maxWidth: 200
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.email' />,
        accessor: "email",
        maxWidth: 250
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.phone' />,
        accessor: "phone",
        disableGlobalFilter: true,
        maxWidth: 120
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.rating' />,
        accessor: "rating",
        disableGlobalFilter: true,
        Cell: ({ value }) => <Rating rating={value} />,
        maxWidth: 150
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.consulting_count' />,
        accessor: "consulting_count",
        disableGlobalFilter: true,
        maxWidth: 200,
        minWidth:150
    },
    {
        Header: () => <Translate TranslateKey='tables.doctors.last_consultation_date' />,
        accessor: "last_consultation_date",
        disableGlobalFilter: true,
        maxWidth: 200,
        minWidth:150
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
            editBtnText={"tables.doctors.edit"}
            removeBtnText={"tables.doctors.remove"}
        />
        ,
    }
];

export default DOCTORS_COLUMNS;