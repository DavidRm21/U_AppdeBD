import axios from "axios";

export const deleteLanguageApi = (id)=>{

    return axios.delete(`http://127.0.0.1:8000/api/DeleteLanguage/${id}`)
    
}