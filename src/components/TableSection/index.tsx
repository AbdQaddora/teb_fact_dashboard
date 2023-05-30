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
        setPageSize: React.Dispatch<React.SetStateAction<number>>,
        setActivePage: React.Dispatch<React.SetStateAction<number>>
    }
}

const TableSection = <T extends Record<string, any>,>({ title, columns, data, filterValue, addNew, updated_at, pagination, isLoading }: IProps<T>) => {
    const [forceRender, setForceRender] = useState(true);

    useEffect(() => {
        setForceRender(prev => !prev);
        setTimeout(() => {
            setForceRender(prev => !prev);
        })
    }, [updated_at])

    const nextPage = () => {
        if (pagination) {
            if (pagination.activePage + 1 <= Math.ceil(pagination.totalCount / pagination.pageSize)) {
                pagination.setActivePage(pagination.activePage + 1)
            }
        }
    }

    const prevPage = () => {
        if (pagination) {
            pagination.setActivePage(prev => prev - 1 > 0 ? prev - 1 : prev)
        }
    }

    const _setPageSize = (newPageSize: number) => {
        if (pagination) {
            if (Math.floor(pagination.totalCount / newPageSize) > 0) {
                pagination.setActivePage(Math.floor(pagination.totalCount / newPageSize))
            } else {
                pagination.setActivePage(1)
            }
            pagination.setPageSize(newPageSize);
        }
    }

    return (
        <Style>
            <div className="section_head">
                <H5>{title}</H5>
                {addNew && <Button className='add_btn' onClick={addNew}>
                    +
                </Button>}
            </div>
            {forceRender && (
                (data.length === 0 || isLoading) ? <table className='loading_table'>
                    <thead>
                        <tr className='table_header'>
                            {columns.map(el => <th style={{
                                minWidth: el.minWidth ? `${el.minWidth}px` : undefined,
                                maxWidth: el.maxWidth ? `${el.minWidth}px` : undefined,
                                width: el.width ? el.width as string : undefined
                            }}>#</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(pagination?.pageSize || 10)].map(el => {
                            return <tr>
                                {columns.map(el => <td style={{
                                    minWidth: el.minWidth ? `${el.minWidth}px` : undefined,
                                    maxWidth: el.maxWidth ? `${el.minWidth}px` : undefined,
                                    width: el.width ? el.width as string : undefined
                                }}><div className='loading_td'></div></td>)}
                            </tr>
                        })}
                    </tbody>
                </table> : (filterValue ? <TableWithFilter
                    filterValue={filterValue}
                    columns={columns}
                    data={data}
                /> : <Table
                    columns={columns}
                    data={data}
                />)
            )}
            {pagination ? <TablePagination
                nextPage={nextPage}
                pageCount={Math.ceil(pagination.totalCount / pagination.pageSize)}
                pageIndex={pagination.activePage}
                pageSize={pagination.pageSize}
                previousPage={prevPage}
                setPageSize={_setPageSize}
            /> : ""}
        </Style>
    )
}


export default TableSection