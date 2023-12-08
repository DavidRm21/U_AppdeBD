import axios from 'axios';

export const getCountryApi = (url) => {

    return axios.get(url)
                .then(async (res) => {
                    let countryArray = [];
                    res.data.map(countries => (
                        countryArray.push(countries)
                    ))

                    return countryArray
                })
}