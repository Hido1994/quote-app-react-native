import {configureStore} from '@reduxjs/toolkit'
import quotesReducer from "./quotesSlice";
import tagsReducer from "./tagsSlice";
import statusReducer from "./statusSlice";

export default configureStore({
    reducer: {
        quotes: quotesReducer,
        tags: tagsReducer,
        status: statusReducer
    },
})