import {createSlice} from '@reduxjs/toolkit'

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: [],
    reducers: {
        addQuotes: (state, action) => {
            state.push(...action.payload);
        },
        setQuotes: (state, action) => {
            return action.payload;
        },
    },
})

export const {addQuotes, setQuotes} = quotesSlice.actions

export default quotesSlice.reducer