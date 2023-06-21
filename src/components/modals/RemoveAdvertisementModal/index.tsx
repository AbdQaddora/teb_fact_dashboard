import Style from './style';
import { H5, Subtitle1 } from '../../tiny/Typography/style';
import Button from '../../tiny/Button';
import { useTranslation } from 'react-i18next';

// image
import noAvatar from '../../../assets/images/no_avatar.webp';
import { useAppDispatch } from '../../../hooks/redux';

import { ADVERTISEMENTS_ACTIONS } from '../../../redux/slices/advertisementsSlice';
interface IProps {
    advertisement: IAdvertisement;
    close: () => void
}

const RemoveAdvertisementModal = ({ advertisement, close }: IProps) => {
    const dispatch = useAppDispatch();
    console.log({ advertisement })
    const { t } = useTranslation("", { keyPrefix: "modals.remove_advertisement_modal" });
    const handelRemove = () => {
        dispatch(ADVERTISEMENTS_ACTIONS.deleteAdvertisement(advertisement.id))
        close();
    }

    return (
        <Style>
            <img
                className="advertisement_image"
                src={advertisement.image}
                alt={advertisement.link}
                onError={(e) => {
                    e.currentTarget.src = noAvatar
                }}
            />
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

export default RemoveAdvertisementModal