import React from 'react'
import Style from './style';
import { H5, Subtitle1 } from '../tiny/Typography/style';
import Button from '../tiny/Button';
import { useTranslation } from 'react-i18next';

// image
import noAvatar from '../../assets/images/no_avatar.webp';
interface IProps {
    id: string;
    name: string;
    avatar: string;
    close: () => void;
}

const RemoveDoctorModal = ({ id, name, avatar, close }: IProps) => {

    console.log({ avatar })
    const { t } = useTranslation("", { keyPrefix: "components.remove_doctor_modal" });
    const handelRemove = () => {
        // !todo call api
        console.log({ id })
        close();
    }

    return (
        <Style>
            <div className='avatar_container'>
                <img
                    className="avatar"
                    src={avatar}
                    alt={name}
                    onError={(e) => {
                        e.currentTarget.src = noAvatar
                    }}
                />
            </div>
            <H5 align='center' margin='1rem 0 0'>{t("question1")}{name}{t("question2")}</H5>
            <Subtitle1 align='center' margin="0 0 1rem" color='text/secondary'>{t("subTitle")}</Subtitle1>
            <Button
                fullWidth
                onClick={handelRemove}
                className='danger'
            >{t("btn")}</Button>
        </Style>
    )
}

export default RemoveDoctorModal