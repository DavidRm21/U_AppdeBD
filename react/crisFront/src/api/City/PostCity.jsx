import axios from "axios";

export const PostCityApi = (data)=>{

    return axios.post('http://127.0.0.1:8000/api/NewCity/', data)

}