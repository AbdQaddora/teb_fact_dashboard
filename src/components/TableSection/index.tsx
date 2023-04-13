import React from 'react'
import Style from './style'
import Table from '../Table'
import { H5 } from '../tiny/Typography/style'
import { Column } from 'react-table'

interface IProps<T extends Record<string, any>> {
    title: string,
    columns: Column<T>[],
    data: T[]
}
const TableSection = <T extends Record<string, any>,>({ title, columns, data }: IProps<T>) => {
    return (
        <Style>
            <H5 margin='0 1rem 1rem'>{title}</H5>
            <Table
                columns={columns}
                data={data}
            />
        </Style>
    )
}

export default TableSection