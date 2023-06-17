import * as yup from 'yup';

const ContactInfoSchema = yup.object({
    email: yup.string().email("invalid_email").required("email_is_required"),
    mobile_number: yup.string().min(7).max(15).required("mobile_number_is_required"),
    facebook: yup.string()
        .matches(
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            'invalid_facebook_url'
        ).test('facebook-format', 'invalid_facebook_url', (value) => {
            return value?.includes("facebook.com")
        }).required("facebook_url_is_required"),
    instagram: yup.string()
        .matches(
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            'invalid_instagram_url'
        ).test('instagram-format', 'invalid_instagram_url', (value) => {
            return value?.includes("instagram.com")
        }).required("instagram_url_is_required"),
    website: yup.string().matches(
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        'invalid_website_url'
    ).required("website_url_is_required"),
    whatsapp: yup.string()
        .matches(
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            'invalid_whatsapp_url'
        ).test('whatsapp-format', 'invalid_whatsapp_url', (value) => {
            return value?.includes("wa.me/")
        }).required("whatsapp_url_is_required"),
    twitter: yup.string().test('twitter-format', 'invalid_twitter_url', (value) => {
        return (new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/).test(value as string) && value?.includes("twitter.com")) || value === ""
    }).notRequired(),
});

export default ContactInfoSchema;