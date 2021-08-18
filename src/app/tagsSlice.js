import {createSlice} from '@reduxjs/toolkit'

export const tagsSlice = createSlice({
    name: 'tags',
    initialState: [],
    reducers: {
        setTags: (state, action) => {
            return action.payload
        },
    },
})

export const {setTags} = tagsSlice.actions

export default tagsSlice.reducer