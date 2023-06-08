import React, { useEffect, useState } from 'react'
import Style from './style'
import { H5 } from '../tiny/Typography/style'
import { Column } from 'react-table'
import Table from '../Table'
import TableWithFilter from '../TableWithFilter'
import Button from '../tiny/Button'
import TablePagination from '../TablePagination'

interface IProps<T extends Record<string, any>> {
    title: string,
    columns: Column<T>[],
    data: T[],
    filterValue?: string,
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
    filterValue,
    addNew,
    updated_at,
    pagination,
    isLoading }: IProps<T>) => {
    const [forceRender, setForceRender] = useState(true);

    useEffect(() => {
        setForceRender(prev => !prev);
        setTimeout(() => {
            console.log("RERENDER")
            console.log({ dataInRerender: data })
            setForceRender(prev => !prev);
        })
    }, [updated_at])

    console.log({ updated_at })
    console.log({ dataFromSection: data })
    return (
        <Style>
            <div className="section_head">
                <H5>{title}</H5>
                {addNew && <Button className='add_btn' onClick={addNew}>
                    +
                </Button>}
            </div>
            {forceRender && ((filterValue ? <TableWithFilter
                filterValue={filterValue}
                columns={columns}
                isLoading={isLoading}
                data={data}
            /> : <Table
                isLoading={isLoading}
                columns={columns}
                data={data}
            />)
            )}
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