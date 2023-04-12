import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination, Column } from 'react-table';
import Style from './style';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Pagination from './Pagination';

interface IProps<T extends Record<string, any>> {
    data: T[],
    columns: Column<T>[]
}
const Table = <T extends Record<string, any>,>({ data, columns }: IProps<T>) => {
    const columnsAfterMemo = useMemo(() => columns, []) as readonly Column<object>[];
    const dataAfterMemo: T[] = useMemo(() => data, [])

    const tableInstance = useTable({
        columns: columnsAfterMemo,
        data: dataAfterMemo as object[]
    }, useSortBy, usePagination);

    const {
        getTableBodyProps,
        getTableProps,
        page,
        headerGroups,
        prepareRow,
        pageCount,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = tableInstance;

    return (
        <>
            <Style {...getTableProps()}>
                <thead>
                    {headerGroups.map(el => {
                        return <tr className='table_header' {...el.getHeaderGroupProps()}>
                            {el.headers.map(head => {
                                return <th {...head.getHeaderProps(head.getSortByToggleProps())}>
                                    {head.isSorted ? (head.isSortedDesc ?
                                        <BsArrowDown className='order_icon' /> : <BsArrowUp className='order_icon' />) : ""}
                                    {head.render("Header")}
                                </th>
                            })}
                        </tr>
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return <tr className='table_body_row'{...row.getRowProps()}>
                            {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render("Cell")}</td>)}
                        </tr>
                    })}
                </tbody>
            </Style>
            <Pagination {...{ nextPage, pageCount, pageIndex, pageSize, previousPage, setPageSize, }} />
        </>
    )
}

export default Table