import { QuestionsTypes } from "./enums"
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