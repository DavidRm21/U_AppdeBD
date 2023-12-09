import axios from "axios";

export const postLanguageApi = (url, data)=>{

    return axios.post(url, data)
    
}