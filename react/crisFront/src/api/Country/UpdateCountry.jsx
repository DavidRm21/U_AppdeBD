import axios from "axios";

export const UpdateCountryApi = (id, data)=>{

    return axios.put(`http://127.0.0.1:8000/api/UpdateCountry/${id}`, data)
    .then(() => {})
    .catch(console.error)
}