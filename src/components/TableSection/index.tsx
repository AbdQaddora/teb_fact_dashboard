import React from 'react'
import Style from './style'
import { H5 } from '../tiny/Typography/style'
import { Column } from 'react-table'
import Table from '../Table'
import TableWithFilter from '../TableWithFilter'

interface IProps<T extends Record<string, any>> {
    title: string,
    columns: Column<T>[],
    data: T[],
    filterValue?: string
}
const TableSection = <T extends Record<string, any>,>({ title, columns, data, filterValue }: IProps<T>) => {
    return (
        <Style>
            <H5 margin='0 1rem 1rem'>{title}</H5>
            {filterValue ? <TableWithFilter
                filterValue={filterValue}
                columns={columns}
                data={data}
            /> : <Table
                columns={columns}
                data={data}
            />}

        </Style>
    )
}

export default TableSection