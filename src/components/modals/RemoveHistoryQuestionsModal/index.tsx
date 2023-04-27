import React from 'react'
import Style from './style';
import { H5, Subtitle1 } from '../../tiny/Typography/style';
import Button from '../../tiny/Button';
import { useTranslation } from 'react-i18next';

// image
import noAvatar from '../../assets/images/no_avatar.webp';
import { useAppDispatch } from '../../../hooks/redux';
import { deleteQuestion } from '../../../redux/slices/historyQuestionsSlice';
interface IProps {
    id: string;
    close: () => void;
}

const RemoveDoctorModal = ({ id, close }: IProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation("", { keyPrefix: "modals.remove_history_question_modal" });
    const handelRemove = () => {
        // !todo call api
        dispatch(deleteQuestion({ id: id }))
        console.log({ id })
        close();
    }

    return (
        <Style>
            <H5 align='center' margin='1rem 0 0'>{t("question")}</H5>
            <Subtitle1 align='center' margin="0 0 1rem" color='text/secondary'>{t("subTitle")}</Subtitle1>
            <Button
                color='danger'
                fullWidth
                onClick={handelRemove}
            >{t("btn")}</Button>
        </Style>
    )
}

export default RemoveDoctorModal