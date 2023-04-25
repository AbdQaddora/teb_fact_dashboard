import React from 'react'
import Style from './style'
import { H5 } from '../tiny/Typography/style'
import { Column } from 'react-table'
import Table from '../Table'
import TableWithFilter from '../TableWithFilter'
import Button from '../tiny/Button'
import { GrAdd } from 'react-icons/gr'

interface IProps<T extends Record<string, any>> {
    title: string,
    columns: Column<T>[],
    data: T[],
    filterValue?: string,
    addNew?: () => void
}

const TableSection = <T extends Record<string, any>,>({ title, columns, data, filterValue, addNew }: IProps<T>) => {
    return (
        <Style>
            <div className="section_head">
                <H5>{title}</H5>
                {addNew && <Button className='add_btn' onClick={addNew}>
                    +
                </Button>}
            </div>
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