import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination, Column } from 'react-table';
import Style, { TableContainer } from './style';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import TablePagination from '../TablePagination';

const emptyData: Record<string, any>[] = [];
const emptyColumns: readonly Column<object>[] = [];
interface IProps<T extends Record<string, any>> {
    data: T[],
    columns: Column<T>[],
}

const Table = <T extends Record<string, any>,>({ data, columns }: IProps<T>) => {
    const dataAfterMemo: T[] = useMemo(() => data, [])
    const columnsAfterMemo = useMemo(() => columns, [columns]) as readonly Column<object>[];

    const tableInstance = useTable({
        data: dataAfterMemo || emptyData,
        columns: columnsAfterMemo || emptyColumns
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
                                                minWidth: head.minWidth ? `${head.minWidth}px` : undefined,
                                                maxWidth: head.maxWidth ? `${head.minWidth}px` : undefined,
                                                width: head.width ? head.width as string : undefined,
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
                                        minWidth: cell.column.minWidth ? `${cell.column.minWidth}px` : undefined,
                                        maxWidth: cell.column.maxWidth ? `${cell.column.maxWidth}px` : undefined,
                                        width: cell.column.width ? cell.column.width as string : undefined,
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

export default Table