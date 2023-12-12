import axios from "axios";

export const GetByIdLanguageApi = (id)=>{

    return axios.get(`http://127.0.0.1:8000/api/ShowIdLanguage/${id}`)
    .then(({data}) => data)
    .catch(console.error)
    
}