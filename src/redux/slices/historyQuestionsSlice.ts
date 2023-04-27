import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'
import { IQuestion } from '../../types/HistoryQuestion'

// mock
import allQuestionsMock from '../../mock/history_questions.json';

// Define a type for the slice state
interface IHistoryQuestionsSlice {
    questions: IQuestion[],
}

// Define the initial state using that type
const initialState: IHistoryQuestionsSlice = {
    questions: [
        {
            "id": "3d1d0ec2-8db1-499c-9f5c-9fdfabc79bca",
            "type": 0,
            "ar": {
                "question": "هل لديك حساسية لأي مواد أو أدوية؟",
                "options": [
                    "years",
                    "months",
                    "days"
                ]
            },
            "en": {
                "options": [
                    "years",
                    "months",
                    "days",
                    "hours"
                ],
                "question": "Do you have any allergies to any substances or medications?"
            }
        },
        {
            "id": "664287a9-47d0-46e3-92b4-a160903ffb5a",
            "type": 3,
            "ar": {
                "question": "هل تعاني من أي حالات صحية أو مرضية حالياً؟",
                "options": [
                    "years",
                    "months",
                    "days"
                ]
            },
            "en": {
                "options": [
                    "years",
                    "months",
                    "days",
                    "hours"
                ],
                "question": "Do you have any current health conditions or illnesses?"
            }
        }],
}

export const historyQuestionsSlice = createSlice({
    name: 'historyQuestions',
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<{ question: IQuestion }>) => {
            state.questions = [...state.questions, action.payload.question]
        },
        setAllQuestion: (state, action: PayloadAction<{ questions: IQuestion[] }>) => {
            state.questions = [...action.payload.questions]
        },
        deleteQuestion: (state, action: PayloadAction<{ id: string }>) => {
            state.questions = state.questions.filter(question => question.id !== action.payload.id);
        },
        updateQuestion: (state, action: PayloadAction<{ new_question: IQuestion }>) => {
            state.questions = state.questions.map(question => {
                if (question.id !== action.payload.new_question.id) {
                    return action.payload.new_question;
                }
                return question;
            });
        },
    },
})

export const { addQuestion, deleteQuestion, updateQuestion, setAllQuestion } = historyQuestionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectHistoryQuestions = (state: RootState) => state.historyQuestions

// custom reducers
export const getAllQuestions = () => (dispatch: AppDispatch) => {
    // TODO: API CALL TO GET THE DATA
    dispatch(setAllQuestion({ questions: allQuestionsMock }))
}

export default historyQuestionsSlice.reducer