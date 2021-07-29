import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from "./quotesSlice";

export default configureStore({
    reducer: {
        quotes: quotesReducer

    },
})