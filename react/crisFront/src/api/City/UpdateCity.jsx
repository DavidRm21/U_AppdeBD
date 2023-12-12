import axios from "axios";

export const UpdateCityApi = (id, data)=>{

    return axios.put(`http://127.0.0.1:8000/api/UpdateCity/${id}`, data)
    .then(() => {})
    .catch(console.error)
}