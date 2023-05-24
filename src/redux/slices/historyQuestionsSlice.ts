import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'

// mock
import allQuestionsMock from '../../mock/history_questions.json';
import { IQuestion } from '../../types/HistoryQuestion';

// Define a type for the slice state
interface IHistoryQuestionsSlice {
    questions: IQuestion[],
    updated_at: string
    is_initial_data_fetched: boolean
}

// Define the initial state using that type
const initialState: IHistoryQuestionsSlice = {
    questions: [],
    updated_at: `${Date.now()}`,
    is_initial_data_fetched: false
}

export const historyQuestionsSlice = createSlice({
    name: 'historyQuestions',
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<{ question: IQuestion }>) => {
            state.questions = [action.payload.question, ...state.questions];
            state.updated_at = `${Date.now()}`
        },
        setAllQuestion: (state, action: PayloadAction<{ questions: IQuestion[] }>) => {
            state.questions = [...action.payload.questions];
            state.updated_at = `${Date.now()}`,
                state.is_initial_data_fetched = true;
        },
        deleteQuestion: (state, action: PayloadAction<{ id: string }>) => {
            state.questions = state.questions.filter(question => question.id !== action.payload.id);
            state.updated_at = `${Date.now()}`
        },
        updateQuestion: (state, action: PayloadAction<{ new_question: IQuestion }>) => {
            state.questions = state.questions.map(question => {
                if (question.id === action.payload.new_question.id) {
                    return action.payload.new_question;
                }
                return question;
            });
            state.updated_at = `${Date.now()}`
        },
    },
})

export const {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    setAllQuestion
} = historyQuestionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectHistoryQuestions = (state: RootState) => state.historyQuestions

// custom reducers
export const getAllQuestions = (is_initial_data_fetched: boolean) => (dispatch: AppDispatch) => {
    if (!is_initial_data_fetched) {
        // TODO: API CALL TO GET THE ALL QUESTIONS
        console.log("RESET")
        dispatch(setAllQuestion({ questions: allQuestionsMock }))
    }
}

export const addHistoryQuestion = (question: IQuestion) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO ADD THE QUESTION
    dispatch(addQuestion({ question }))
}

export const updateHistoryQuestion = (new_question: IQuestion) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO UPDATE THE QUESTION
    dispatch(updateQuestion({ new_question }))
}

export const deleteHistoryQuestion = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO DELETE THE QUESTION
    dispatch(deleteQuestion({ id }))
}

export default historyQuestionsSlice.reducer