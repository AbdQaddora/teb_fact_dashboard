export enum QuestionsTypes {
    Textarea = 0,
    Radio = 1,
    TrueFalse = 2,
    Checkbox = 3,
}

export type TQuestionInSingleLang = {
    question: string,
    options?: string[]
}

export interface IQuestion {
    id: string,
    type: QuestionsTypes,
    ar: TQuestionInSingleLang,
    en: TQuestionInSingleLang,
}