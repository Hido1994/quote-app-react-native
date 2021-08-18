import axios from "axios";
import {addQuotes} from "../app/quotesSlice";
import {setError, setLoading} from "../app/statusSlice";
import {setTags} from "../app/tagsSlice";

const api = axios.create({
    baseURL: 'http://v2202107152138157776.supersrv.de:5000'
});

export const loadQuotes = async (dispatch, page, limit, tag) => {
    let moreData = false;
    try {
        dispatch(setLoading(true))
        const result = await api.get("/quote", {params: {tag, page, limit}})
        const data = result.data
        if (data.length !== 0) {
            dispatch(addQuotes(data))
            moreData = true
        }
        dispatch(setLoading(false))
    } catch (error) {
        dispatch(setError('Failed to retrieve quotes: ' + error.message))
    }
    return moreData;
}

export const loadTags = async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const result = await api.get("/quote/tag")
        const data = result.data
        dispatch(setTags(data))
        dispatch(setLoading(false))
    } catch (error) {
        dispatch(setError('Failed to retrieve quotes: ' + error.message))
    }
}