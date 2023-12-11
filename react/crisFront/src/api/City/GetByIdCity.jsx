import axios from "axios";

export const GetByIdCityApi = (id)=>{

    return axios.get(`http://127.0.0.1:8000/api/ShowIdCity/${id}`)
    
}