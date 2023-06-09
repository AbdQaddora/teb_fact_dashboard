import React from 'react'
import Style from './style';
import { H5, Subtitle1 } from '../../tiny/Typography/style';
import Button from '../../tiny/Button';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../../hooks/redux';
import { deleteQuestion } from '../../../redux/slices/historyQuestionsSlice';
// tostas
import { toast } from 'react-toastify';
interface IProps {
    id: string;
    close: () => void;
}

const RemoveDermatologistModal = ({ id, close }: IProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation("", { keyPrefix: "modals.remove_history_question_modal" });
    const handelRemove = () => {
        try {
            dispatch(deleteQuestion(id))
            toast.success(t("success_msg"))
            close();
        } catch (error) {
            console.log(error)
        }

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

export default RemoveDermatologistModal