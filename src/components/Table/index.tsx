import React, { useEffect, useMemo } from 'react'
import latest_consultations from "../../mock/latest_consultations.json";
import LATEST_CONSULTATIONS_COLUMNS, { IDataLatestConsultation } from "../../constants/latest_consultations_columns";
import { useTable, useSortBy, usePagination } from 'react-table';
import Style from './style';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';


const Table = () => {
    const data: IDataLatestConsultation[] = useMemo(() => latest_consultations, [])
    const columns = useMemo(() => LATEST_CONSULTATIONS_COLUMNS, [])
    
    const tableInstance = useTable({
        columns,
        data
    },
        useSortBy,
        usePagination
    );
    
    const {
        getTableBodyProps,
        getTableProps,
        rows,
        headerGroups,
        prepareRow,
        // canPreviousPage,
        // canNextPage,
        // pageOptions,
        // pageCount,
        // gotoPage,
        // nextPage,
        // previousPage,
        // setPageSize,
        // state: { pageIndex, pageSize }
     } = tableInstance;

    // useEffect(() => {
    //    setPageSize(10)

    // }, [])

    return (
        <Style {...getTableProps()}>
            <thead>
                {headerGroups.map(el => {
                    return <tr className='table_header' {...el.getHeaderGroupProps()}>
                        {el.headers.map(head => {
                            // @ts-ignore
                            return <th {...head.getHeaderProps(head.getSortByToggleProps())}> {head.isSorted ? (head.isSortedDesc ?
                                <BsArrowDown className='order_icon' /> : <BsArrowUp className='order_icon' />) : ""}
                                {head.render("Header")}
                            </th>
                        })}
                    </tr>
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return <tr className='table_body_row'{...row.getRowProps()}>
                        {row.cells.map(cell => <td>{cell.render("Cell")}</td>)}
                    </tr>
                })}
            </tbody>
        </Style>
    )
}

export default Table