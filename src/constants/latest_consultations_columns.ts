import { Column } from 'react-table';

export interface IDataLatestConsultation {
    order_id: string;
    patient: string;
    date: string;
    status: string;
}

const LATEST_CONSULTATIONS_COLUMNS: Column<IDataLatestConsultation>[] = [
    {
        Header: "Order ref",
        accessor: "order_id",
    },
    {
        Header: "Patient",
        accessor: "patient"
    },
    {
        Header: "Date",
        accessor: "date"
    },
    {
        Header: "Status",
        accessor: "status",
    }
];

export default LATEST_CONSULTATIONS_COLUMNS;