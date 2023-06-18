import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import { useLang } from '../context/LanguageContext';
import { Body1 } from '../components/tiny/Typography/style';
import StaticPagesTableActions from '../components/tables_actions/StaticPagesTableActions';

const STATIC_PAGES_COLUMNS: Column<IStaticPage>[] = [
    {
        Header: () => <Translate TranslateKey='tables.static_pages.icon' />,
        accessor: "icon",
        Cell: ({ value }) => <img
            width={40}
            height={40}
            style={{ borderRadius: "4px", objectFit: 'cover' }}
            src={value}
            alt='icon'
        />,
        disableSortBy: true,
        minWidth: 100
    },
    {
        Header: () => <Translate TranslateKey='tables.static_pages.title' />,
        accessor: "ar",
        maxWidth: 300,
        width:"auto",
        minWidth: 220,
        Cell: ({ row }) => <TitleCell data={row.original} />,
    },
    {
        Header: () => <Translate TranslateKey='tables.static_pages.description' />,
        accessor: "slug",
        width: "100%",
        maxWidth: 700,
        minWidth: 400,
    },
    {
        Header: () => <Translate TranslateKey='tables.static_pages.actions' />,
        accessor: "id",
        disableSortBy: true,
        Cell: ({ row }) => <StaticPagesTableActions data={row.original} />,
    }
];

const TitleCell = ({ data }: { data: IStaticPage }) => {
    const { lang } = useLang();
    return <Body1 weight={500}>
        {data[lang.langName].title}
    </Body1>
}

export default STATIC_PAGES_COLUMNS;