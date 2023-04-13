import React, { useEffect, useMemo } from 'react'
import { useTable, useSortBy, usePagination, useGlobalFilter, Column } from 'react-table';
import Style, { TableContainer } from './style';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import TablePagination from '../TablePagination';

interface IProps<T extends Record<string, any>> {
    data: T[],
    columns: Column<T>[],
    filterValue: string
}
const TableWithFilter = <T extends Record<string, any>,>({ data, columns, filterValue }: IProps<T>) => {
    const columnsAfterMemo = useMemo(() => columns, []) as readonly Column<object>[];
    const dataAfterMemo: T[] = useMemo(() => data, [])

    const tableInstance = useTable({
        columns: columnsAfterMemo,
        data: dataAfterMemo as object[]
    }, useGlobalFilter, useSortBy, usePagination);
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
        setGlobalFilter,
        state: { pageIndex, pageSize }
    } = tableInstance;

    useEffect(() => {
        setGlobalFilter(filterValue)
    }, [filterValue]);

    return (
        <>
            <TableContainer>
                <Style {...getTableProps()}>
                    <thead>
                        {headerGroups.map(el => {
                            return <tr className='table_header' {...el.getHeaderGroupProps()}>
                                {el.headers.map(head => {
                                    return <th {
                                        ...head.getHeaderProps({
                                            ...head.getSortByToggleProps(),
                                            style: {
                                                minWidth: head.minWidth ? `${head.minWidth}px` : "unset",
                                                width: head.width ? `${head.width}px` : "unset",
                                            },
                                        })
                                    }>
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
                                {row.cells.map(cell => <td {...cell.getCellProps({
                                    style: {
                                        minWidth: cell.column.minWidth ? `${cell.column.minWidth}px` : "unset",
                                        width: cell.column.width ? `${cell.column.width}px` : "unset",
                                    }
                                })}>{cell.render("Cell")}</td>)}
                            </tr>
                        })}
                    </tbody>
                </Style>
            </TableContainer>
            <TablePagination {...{ nextPage, pageCount, pageIndex, pageSize, previousPage, setPageSize, }} />
        </>
    )
}

export default TableWithFilter