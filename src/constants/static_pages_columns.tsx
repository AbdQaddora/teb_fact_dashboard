import { Column } from 'react-table';
import Translate from '../components/tiny/Translate';
import { IStaticPage } from '../types/StaticPages';
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
            style={{ borderRadius: "4px" }}
            src={value}
            alt='icon'
        />,
        disableSortBy: true,
        width: 100
    },
    {
        Header: () => <Translate TranslateKey='tables.static_pages.title' />,
        accessor: "ar",
        maxWidth: 200,
        minWidth: 150,
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
        maxWidth: 180,
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