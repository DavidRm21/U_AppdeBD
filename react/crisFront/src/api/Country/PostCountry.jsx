import axios from "axios";

export const PostCountryApi = (data)=>{

    return axios.post('http://127.0.0.1:8000/api/NewCountry/', data)

}