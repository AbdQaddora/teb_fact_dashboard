import React, { useState, useCallback } from 'react'
import { H6 } from '../../tiny/Typography/style'
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { QuestionsTypes } from '../../../types/HistoryQuestion';
import Input from '../../tiny/Input';
import Button from '../../tiny/Button';
// translation
import { useTranslation } from 'react-i18next';
// style
import Style from './style'
// tostas
import { toast } from 'react-toastify';
// validation
import questionSchema from '../../../validation/history_question';
interface IProps {
    close: () => void
}

interface IOptions {
    label: string,
    value: string,
}

const NewHistoryQuestionModal = ({ close }: IProps) => {
    const { t } = useTranslation("", { keyPrefix: "modals.new_history_question_modal" })
    const historyQuestionTypesOptions = [
        { value: QuestionsTypes.TrueFalse, label: t("true_or_false") },
        { value: QuestionsTypes.Textarea, label: t("free_text") },
        { value: QuestionsTypes.Radio, label: t("multiple_choice") },
        { value: QuestionsTypes.Checkbox, label: t("select_one_or_more") },
    ];

    const [questionType, setQuestionType] = useState<QuestionsTypes>(QuestionsTypes.TrueFalse);
    const [question, setQuestion] = useState({
        en: "",
        ar: ""
    });
    const [options, setOptions] = useState<{ en: IOptions[], ar: IOptions[] }>({
        en: [],
        ar: []
    });

    const handelQuestionInputs = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }, [])

    const handelAdd = () => {
        const data = {
            type: questionType,
            en: {
                question: question.en,
                options: options.en.map(el => el.value)
            },
            ar: {
                question: question.ar,
                options: options.ar.map(el => el.value)
            }
        }

        console.log(data);
        questionSchema.validate(data, { abortEarly: false })
            .then(() => {
                // TODO: send api call
                close();
                toast.success("question added successfully");
            })
            .catch(({ errors }) => {
                errors.map((error: string) => {
                    toast.error(t(error));
                })
            })
    }


    return (
        <Style>
            <H6 margin='0 0 0.5rem'>{t("question_type")}</H6>
            <Select
                value={{
                    value: questionType,
                    label: historyQuestionTypesOptions.find(el => el.value === questionType)?.label
                }}
                onChange={val => setQuestionType(val?.value as QuestionsTypes)}
                options={historyQuestionTypesOptions}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary: '#3832A0',
                    },
                })}
            />
            <div className="divider" />
            <Input
                placeholder={t('question_text_in_arabic') as string}
                fullWidth
                margin='0.5rem 0'
                height='small'
                value={question.ar}
                name='ar'
                onChange={handelQuestionInputs}
            />
            <Input
                placeholder={t('question_text_in_english') as string}
                fullWidth
                margin='0.5rem 0'
                height='small'
                value={question.en}
                name='en'
                onChange={handelQuestionInputs}
            />
            {(questionType === QuestionsTypes.Checkbox || questionType === QuestionsTypes.Radio)
                && <>
                    <div className="divider" />
                    <CreatableSelect
                        placeholder={t('answer_options_in_arabic')}
                        isClearable
                        isMulti
                        onChange={(values) => {
                            setOptions(prev => ({
                                ...prev,
                                ar: values.map(el => el)
                            }))
                        }}
                        value={options.ar}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 4,
                            colors: {
                                ...theme.colors,
                                primary: '#3832A0',
                            },
                        })}
                    />
                    <CreatableSelect
                        className='english_select'
                        placeholder={t('answer_options_in_english')}
                        isClearable
                        isMulti
                        onChange={(values) => {
                            setOptions(prev => ({
                                ...prev,
                                en: values.map(el => el)
                            }))
                        }}
                        value={options.en}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 4,
                            colors: {
                                ...theme.colors,
                                primary: '#3832A0',
                            },
                        })}
                    />
                </>}
            <Button margin='0.5rem 0' fullWidth onClick={handelAdd}>{t("add_btn")}</Button>
        </Style>
    )
}

export default NewHistoryQuestionModal