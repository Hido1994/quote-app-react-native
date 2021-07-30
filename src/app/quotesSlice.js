import {createSlice} from '@reduxjs/toolkit'

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: [],
    reducers: {
        addQuotes: (state, action) => {
            state.push(...action.payload);
        },
    },
})

export const {addQuotes} = quotesSlice.actions

export default quotesSlice.reducer