import axios from "axios";
import {setQuotes} from "../app/quotesSlice";

const api = axios.create({
    baseURL: 'https://api.quotable.io'
});

export const loadQuotes = async (dispatch) => {
    try{
        const result = await api.get("/random")
        const data = result.data
        dispatch( setQuotes([{'quote': data.content, 'author': data.author}]) )
    }
    catch(e){
        //TODO
    }
}