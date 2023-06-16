import Style from './style';
import { H5, Subtitle1 } from '../../tiny/Typography/style';
import Button from '../../tiny/Button';
import { useTranslation } from 'react-i18next';

// image
import noAvatar from '../../../assets/images/no_avatar.webp';
import { useAppDispatch } from '../../../hooks/redux';
import { deletePatient } from '../../../redux/slices/patientsSlice';

interface IProps {
    id: string;
    name: string;
    avatar: string;
    close: () => void;
}

const RemovePatientModal = ({ id, name, avatar, close }: IProps) => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation("", { keyPrefix: "modals.remove_patient_modal" });
    
    const handelRemove = () => {
        dispatch(deletePatient(id))
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
                color='danger'
                fullWidth
                onClick={handelRemove}
            >{t("btn")}</Button>
        </Style>
    )
}

export default RemovePatientModal