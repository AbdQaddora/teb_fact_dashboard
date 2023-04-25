import * as yup from 'yup';
import { QuestionsTypes } from '../types/HistoryQuestion';

const questionSchema = yup.object({
    type: yup.number().oneOf([0, 1, 2, 3]),
    en_question: yup.string().required("errors.english_question_is_required"),
    ar_question: yup.string().required("errors.arabic_question_is_required"),
    en_options: yup.array().of(yup.string()).when("type", {
        is: (value: number) => value === QuestionsTypes.Checkbox || value === QuestionsTypes.Radio,
        then: schema => schema
            .min(3, "errors.english_options_min")
            .max(7, "errors.english_options_max")
            .required("errors.english_options_is_required")
    }),
    ar_options: yup.array().of(yup.string()).when("type", {
        is: (value: number) => value === QuestionsTypes.Checkbox || value === QuestionsTypes.Radio,
        then: schema => schema
            .min(3, "errors.arabic_options_min")
            .max(7, "errors.arabic_options_max")
            .required("errors.arabic_options_is_required")
            .test("hello", function (value) {
                if (value.length !== this.parent.en_options.length) {
                    return this.createError({ message: 'errors.options_must_have_same_length' })
                }
                return true;
            })
    })
});

export default questionSchema;
