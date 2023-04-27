import { configureStore } from '@reduxjs/toolkit'
import historyQuestionsReducer from './slices/historyQuestionsSlice';

export const store = configureStore({
    reducer: {
        historyQuestions: historyQuestionsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch