import axios from "axios";

export const postLanguageApi = (data)=>{

    return axios.post('http://127.0.0.1:8000/api/NewLanguage/', data)
    
}