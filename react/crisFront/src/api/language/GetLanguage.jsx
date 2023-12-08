import axios from 'axios';

export const getLanguageApi = (url) => {

    return axios.get(url)
                .then(async (res) => {
                    let languagesArray = [];
                    res.data.map(languages => (
                        languagesArray.push(languages)
                    ))

                    return languagesArray
                })
}