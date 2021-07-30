import axios from "axios";
import {addQuotes} from "../app/quotesSlice";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const loadQuotes = async (dispatch, page, limit) => {
    try{

        const result = await api.get("/quote", { params: { page, limit } })
        const data = result.data
        dispatch( addQuotes(data) )
    }
    catch(e){
        //TODO
    }
}