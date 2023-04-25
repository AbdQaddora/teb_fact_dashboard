import * as yup from 'yup';
import { QuestionsTypes } from '../types/HistoryQuestion';
/*
{
    "type": 1,
    "en": {
        "question": "",
        "options": []
    },
    "ar": {
        "question": "",
        "options": [
            "بل",
            "لا"
        ]
    }
}
*/
const questionSchema = yup.object({
    type: yup.number().oneOf([0, 1, 2, 3]),
    en: yup.object({
        question: yup.string().required("errors.english_question_is_required"),
        options: yup.array().of(yup.string()).when("type", {
            is: (value: number) => {
                console.log({ value });
                return value === QuestionsTypes.Checkbox || value === QuestionsTypes.Radio
            },
            then: (schema) => schema.min(3).max(7).required("errors.english_options_is_required")
                .test("same-length", "errors.options_must_have_same_length",
                    function (value) {
                        return value.length === this.parent.parent.en.options.length;
                    }),
            otherwise: (schema) => schema.nullable(),
        })
    }),
    ar: yup.object({
        question: yup.string().required("errors.arabic_question_is_required"),
        options: yup.array().of(yup.string()).when("type", {
            is: (type: number) => type === QuestionsTypes.Checkbox || type === QuestionsTypes.Radio,
            then: (schema) => schema
                .min(3).max(7).required("errors.arabic_options_is_required")
                .test("same-length", "errors.options_must_have_same_length",
                    function (value) {
                        console.log("RUN");
                        return value.length === this.parent.en.options.length;
                    }),
            otherwise: (schema) => schema.nullable(),
        })
    })
});

export default questionSchema;

/*
.test("same-length", i18n.t("errors.options_must_have_same_length") as string, function (value) {
    return value.length === this.parent.en.options.length;
}),
===
.test("same-length", i18n.t("errors.options_must_have_same_length") as string, function (value) {
    // get the parent object
    const parent = this.parent as any;
    // get the en.options array
    const enOptions = parent.en.options;
    // compare the lengths of ar.options and en.options
    return value.length === enOptions.length;
}),
*/