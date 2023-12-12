import axios from 'axios';

export const getCountryApi = (url) => {

    return axios.get(url)
                .then(async ({data}) => {
                    
                    return data
                })
}