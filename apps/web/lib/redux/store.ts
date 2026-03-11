import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Reducers
import CountReducer, { COUNT } from "./features/count/index";
import personalInfoReducer from './features/personalInfo/index';
import questionsReducer from './features/questions/index';

import { persistMiddleware } from './middlewareAndReaders'

const RootReducer = combineReducers({
    count: CountReducer,
    personalInfo: personalInfoReducer,
    questions: questionsReducer
})

export const makeStore = () => {
    return configureStore({
        reducer: RootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistMiddleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = AppStore['dispatch']