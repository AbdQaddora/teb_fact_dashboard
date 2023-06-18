import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import AdvertisementsTableActions from '../components/tables_actions/AdvertisementsTableActions';

const ADVERTISEMENT_COLUMNS: Column<IAdvertisement>[] = [
    {
        Header: () => <Translate TranslateKey='tables.advertisements.image' />,
        accessor: "image",
        Cell: ({ value }) => <img
            src={value}
            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "4px", border: '1px solid #CCC' }}
        />,
        minWidth: 150,
        disableSortBy: true,
    },
    {
        Header: () => <Translate TranslateKey='tables.advertisements.link' />,
        accessor: "link",
        minWidth: 250,
        disableSortBy: true,
        Cell: ({ value }) => <a href={value} target='_blank' style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}>{value}</a>
    },
    {
        Header: () => <Translate TranslateKey='tables.advertisements.actions' />,
        accessor: "id",
        width: 180,
        disableGlobalFilter: true,
        disableSortBy: true,
        Cell: ({ row }) => <AdvertisementsTableActions data={row.original} />
    }
];


export default ADVERTISEMENT_COLUMNS;