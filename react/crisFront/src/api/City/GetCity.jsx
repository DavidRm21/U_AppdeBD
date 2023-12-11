import axios from 'axios';

export const getCityApi = () => {

    return axios.get('http://localhost:8000/api/ShowCity/')
                .then(async (res) => {
                    let cityArray = [];

                    res.data.map((cities => {
                        cityArray.push(cities)
                    }))
                    
                    return cityArray;
                })
}