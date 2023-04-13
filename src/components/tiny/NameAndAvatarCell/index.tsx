import React from 'react'
import Style from './style'
import { Body1 } from '../Typography/style'
interface IProps {
    name: string,
    avatar: string,
}
const NameAndAvatarCell = ({ name, avatar }: IProps) => {
    return (
        <Style>
            <img src={avatar} alt={name} className="avatar" />
            <Body1>{name}</Body1>
        </Style>
    )
}

export default NameAndAvatarCell