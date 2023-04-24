export enum QuestionsTypes {
    Textarea = 0,
    Radio = 1,
    TrueFalse = 2,
    Checkbox = 3,
}

export type TQuestion = {
    question: string,
    options?: string[]
}

export interface IQuestionResponse {
    type: QuestionsTypes,
    ar: TQuestion,
    en: TQuestion,
}