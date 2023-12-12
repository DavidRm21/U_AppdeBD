import axios from "axios";

export const updateLanguageApi = (id, data)=>{

    return axios.put(`http://127.0.0.1:8000/api/UpdateLanguage/${id}`, data)
    .then(() => {
    })
    .catch(console.error)
}