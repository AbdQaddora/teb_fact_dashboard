import { CellProps, Column } from 'react-table';
import ConsultationTypeBadge from '../components/tiny/ConsultationTypeBadge';
import i18n from "../locales/i18n";

export interface IDataLatestConsultation {
    order_id: string;
    patient: string;
    date: string;
    status: string;
}

const LATEST_CONSULTATIONS_COLUMNS: Column<IDataLatestConsultation>[] = [
    {
        Header: i18n.t("home.latest_consultations_columns.order_id") || "",
        accessor: "order_id",
    },
    {
        Header: i18n.t("home.latest_consultations_columns.patient") || "",
        accessor: "patient"
    },
    {
        Header: i18n.t("home.latest_consultations_columns.date") || "",
        accessor: "date"
    },
    {
        Header: i18n.t("home.latest_consultations_columns.status") || "",
        accessor: "status",
        Cell: ({ cell: { value } }: CellProps<any>) => {
            return <ConsultationTypeBadge type={value} />
        }
    }
];

export default LATEST_CONSULTATIONS_COLUMNS;