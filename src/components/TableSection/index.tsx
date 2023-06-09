import React, { useEffect, useState } from 'react'
import Style from './style'
import { H5 } from '../tiny/Typography/style'
import { Column } from 'react-table'
import Table from '../Table'
import Button from '../tiny/Button'
import TablePagination from '../TablePagination'

interface IProps<T extends Record<string, any>> {
    title: string,
    columns: Column<T>[],
    data: T[],
    addNew?: () => void,
    updated_at?: string,
    isLoading?: boolean,
    pagination?: {
        totalCount: number,
        pageSize: number,
        activePage: number,
        setPageSize: (newPageSize: number) => void,
        next: () => void,
        previous: () => void
    }
}

const TableSection = <T extends Record<string, any>,>({
    title,
    columns,
    data,
    addNew,
    updated_at,
    pagination,
    isLoading }: IProps<T>) => {
    const [forceRender, setForceRender] = useState(true);

    useEffect(() => {
        setForceRender(prev => !prev);
        setTimeout(() => {
            setForceRender(prev => !prev);
        })
    }, [updated_at])

    return (
        <Style>
            <div className="section_head">
                <H5>{title}</H5>
                {addNew && <Button className='add_btn' onClick={addNew}>
                    +
                </Button>}
            </div>
            {forceRender && <Table
                isLoading={isLoading}
                columns={columns}
                data={data}
            />}
            {pagination ? <TablePagination
                nextPage={pagination.next}
                pageCount={Math.ceil(pagination.totalCount / pagination.pageSize)}
                pageIndex={pagination.activePage}
                pageSize={pagination.pageSize}
                previousPage={pagination.previous}
                setPageSize={pagination.setPageSize}
            /> : ""}
        </Style>
    )
}


export default TableSection