import axios from 'axios';

export const getLanguageApi = (url) => {

    return axios.get(url)
                .then(async ({data}) => {

                    return data
                })
}