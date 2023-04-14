import React from 'react'
import Style from './style'
import { Body1 } from '../Typography/style';

// image
import noAvatar from '../../../assets/images/no_avatar.webp';
interface IProps {
    name: string,
    avatar: string,
}
const NameAndAvatar = ({ name, avatar }: IProps) => {
    return (
        <Style>
            <img
                src={avatar}
                alt={name}
                className="avatar"
                onError={(e) => {
                    e.currentTarget.src = noAvatar;
                }}
            />
            <Body1>{name}</Body1>
        </Style>
    )
}

export default NameAndAvatar