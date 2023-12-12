import axios from 'axios';

export const getCityApi = (url) => {

    return axios.get(url)
                .then(async ({data}) => {
                    
                    return data;
                })
}