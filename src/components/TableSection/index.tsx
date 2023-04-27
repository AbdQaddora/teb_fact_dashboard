import React, { useEffect, useRef, useState } from 'react'
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
    updated_at?: string
}

const TableSection = <T extends Record<string, any>,>({ title, columns, data, filterValue, addNew, updated_at }: IProps<T>) => {
    const isTableMounted = useRef<boolean>(true);
    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        if (isTableMounted.current) {
            setReRender(false);
            isTableMounted.current = false;
        }
    }, [updated_at])

    useEffect(() => {
        if (!isTableMounted.current) {
            setReRender(true)
            isTableMounted.current = true;
        }
    }, [reRender])

    return (
        <Style>
            <div className="section_head">
                <H5>{title}</H5>
                {addNew && <Button className='add_btn' onClick={addNew}>
                    +
                </Button>}
            </div>
            {reRender && (
                data.length > 0 && (filterValue ? <TableWithFilter
                    filterValue={filterValue}
                    columns={columns}
                    data={data}
                /> : <Table
                    columns={columns}
                    data={data}
                />)
            )}
        </Style>
    )
}


export default TableSection