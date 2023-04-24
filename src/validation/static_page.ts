import * as yup from 'yup';

const langSchema = yup.object({
    title: yup.string(),
    description: yup.string().min(260)
});

let pageSchema = yup.object({
    en: langSchema,
    ar: langSchema
});