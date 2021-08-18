import {createSlice} from '@reduxjs/toolkit'

export const statusSlice = createSlice({
    name: 'status',
    initialState: {loading: false},
    reducers: {
        setLoading: (state, action) => {
            return {loading: action.payload};
        },
        setError: (state, action) => {
            return {loading: false, error: action.payload};
        },
    },
})

export const {setLoading, setError} = statusSlice.actions

export default statusSlice.reducer