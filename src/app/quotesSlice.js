import {createSlice} from '@reduxjs/toolkit'
import {quotes} from "../mock/MockQuotes";

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: quotes,
    reducers: {
        setQuotes: (state, action) => {
            return action.payload;
        },
        addQuote: (state, action) => {
            state.push(action.payload);
        },
    },
})

export const {setQuotes, addQuote} = quotesSlice.actions

export default quotesSlice.reducer