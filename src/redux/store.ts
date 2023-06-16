import { configureStore } from '@reduxjs/toolkit'
import historyQuestionsReducer from './slices/historyQuestionsSlice';
import staticPagesReducer from './slices/staticPagesSlice';
import dermatologistsReducer from './slices/dermatologistsSlice';
import patientsReducer from './slices/patientsSlice';

export const store = configureStore({
    reducer: {
        historyQuestions: historyQuestionsReducer,
        staticPages: staticPagesReducer,
        dermatologists: dermatologistsReducer,
        patients: patientsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch