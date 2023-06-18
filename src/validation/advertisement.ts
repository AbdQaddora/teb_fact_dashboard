import * as yup from 'yup';

const AdvertisementSchema = yup.object({
    image: yup.string().required("advertisement_image_is_required"),
    link: yup.string().matches(
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        'invalid_advertisement_link'
    ).required("advertisement_link_is_required"),
});

export default AdvertisementSchema;