import * as yup from 'yup';

const pageSchema = yup.object({
    icon: yup.string().required("page_icon_required"),
    slug: yup.string().required("page_description_required"),
    en_title: yup.string().required("page_title_ar_required"),
    ar_title: yup.string().required("page_title_en_required"),
    en_description: yup.string().min(50, "page_content_en_required").required("page_content_en_required"),
    ar_description: yup.string().min(50, "page_content_ar_required").required("page_content_ar_required"),
});

export default pageSchema;