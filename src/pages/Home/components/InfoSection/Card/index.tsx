import React, { ReactNode } from 'react'
import Style from './style'
import { Body2, H5 } from '../../../../../components/tiny/Typography/style'
interface IProps {
    icon: ReactNode,
    label: string,
    data: string
}

const Card = ({ data, label, icon }: IProps) => {
    return (
        <Style>
            <div className="data">
                <Body2 className='label' transform='uppercase' color='text/secondary'>
                    {label}
                </Body2>
                <H5>
                    {data}
                </H5>
            </div>
            <div className="icon">
                {icon}
            </div>
        </Style>
    )
}

export default Card