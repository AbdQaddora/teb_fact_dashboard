import { CellProps, Column } from 'react-table';
import ConsultationTypeBadge from '../components/tiny/ConsultationTypeBadge';
import Translate from '../components/tiny/Translate';

export interface IDataLatestConsultationHome {
    order_id: string;
    patient: string;
    date: string;
    status: string;
}

const LATEST_CONSULTATIONS_COLUMNS_HOME: Column<IDataLatestConsultationHome>[] = [
    {
        Header: () => <Translate TranslateKey='home.latest_consultations_columns_home.order_id' />,
        accessor: "order_id",
    },
    {
        Header: () => <Translate TranslateKey='home.latest_consultations_columns_home.patient' />,
        accessor: "patient"
    },
    {
        Header: () => <Translate TranslateKey='home.latest_consultations_columns_home.date' />,
        accessor: "date"
    },
    {
        Header: () => <Translate TranslateKey='home.latest_consultations_columns_home.status' />,
        accessor: "status",
        Cell: ({ cell: { value } }: CellProps<any>) => {
            return <ConsultationTypeBadge type={value} />
        }
    }
];

export default LATEST_CONSULTATIONS_COLUMNS_HOME;