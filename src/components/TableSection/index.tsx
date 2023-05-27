import React, { useEffect, ReactNode, useState } from 'react'
import Style from './style'
import { H5 } from '../tiny/Typography/style'
import { Column } from 'react-table'
import Table from '../Table'
import TableWithFilter from '../TableWithFilter'
import Button from '../tiny/Button'
import { GrAdd } from 'react-icons/gr'
import { useLang } from '../../context/LanguageContext'

interface IProps<T extends Record<string, any>> {
    title: string,
    columns: Column<T>[],
    data: T[],
    filterValue?: string,
    addNew?: () => void,
    updated_at?: string,
    Pagination?: ReactNode
}

const TableSection = <T extends Record<string, any>,>({ title, columns, data, filterValue, addNew, updated_at, Pagination }: IProps<T>) => {
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
            {forceRender && (
                data.length > 0 && (filterValue ? <TableWithFilter
                    filterValue={filterValue}
                    columns={columns}
                    data={data}
                /> : <Table
                    columns={columns}
                    data={data}
                />)
            )}
            {Pagination ? Pagination : ""}
        </Style>
    )
}


export default TableSection