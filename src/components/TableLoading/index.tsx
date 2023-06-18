import React from 'react'
import Style from './style'
import { Column } from 'react-table'
interface IProps<T extends Record<string, any>> {
    columns: Column<T>[],
}

const TableLoading = <T extends Record<string, any>,>({ columns }: IProps<T>) => {
    return (
        <Style>
            {[...Array(10)].map((el , index) => {
                return <tr key={index}>
                    {columns.map((el , index) => <td key={index} style={{
                        minWidth: el.minWidth ? `${el.minWidth}px` : undefined,
                        maxWidth: el.maxWidth ? `${el.minWidth}px` : undefined,
                        width: el.width ? el.width as string : undefined
                    }}><div className='loading_td'></div></td>)}
                </tr>
            })}
        </Style>
    )
}

export default TableLoading