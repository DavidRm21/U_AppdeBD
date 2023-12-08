import axios from 'axios';

export const getCityApi = (url) => {

    return axios.get(url)
                .then(async (res) => {
                    let cityArray = [];

                    res.data.map((cities => {
                        cityArray.push(cities)
                    }))
                    
                    return cityArray;
                })
}