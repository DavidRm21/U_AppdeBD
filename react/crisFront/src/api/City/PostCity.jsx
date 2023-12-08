import axios from "axios";

export const postCityApi = (url,name,district, population, photo, pollutionRate, countryCode)=>{

    const data = {
        "name": name,
        "district": district,
        "population": population,
        "photo": photo,
        "pollutionRate": pollutionRate,
        "countryCode": countryCode
    }
    console.log('Objeto: ',data);
    axios.post(url, data)
    .then(response => {
        console.log('post success');
        console.log('response',response)
    })
    .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)
    })
}