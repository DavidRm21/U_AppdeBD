import { UpdateCityApi } from '../api/City/UpdateCity'
import { PostCityApi } from '../api/City/PostCity'
import { GetByIdCityApi } from '../api/City/GetByIdCity'
import { getCityApi } from '../api/City/GetCity'
import { useEffect, useState } from 'react'
import { DeleteCityApi } from '../api/City/DeleteCity'
import { getCountryApi } from '../api/Country/GetCountry'



export default function countryController ({setValue, reset}) {

    const [countryList, setCountryList] = useState([])
    const [currentId, setCurrentId] = useState()
    const [resetList, setResetList] = useState(false)
    const [cityList, setCityList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowCity/'
    const urlBaseCountry = 'http://localhost:8000/api/ShowCountry'

    // En el momento que se da click para actualizar o crear 
    const onSubmit = ( values ) => {

        /* if (values.photo_city[0].isBlank){

        }else{

        } */
        console.log(values)
        const formData = new FormData()
        formData.append('name', values.name);
        formData.append('district', values.district);
        formData.append('population', values.population);
        formData.append('photo_city', values.photo_city[0]);
        formData.append('pollution_rate', values.pollution_rate);
        formData.append('country_code', values.country_code);

        
        
        if ( currentId ) {
            updateCity(formData)
            return 
        }

        // Guardar los valores en la Base de datos
        postCity( formData )

    }

    const postCity = async (data) => {
        await PostCityApi(data)
        setResetList(v => !v)
        reset()
    }



    // En caso de que el form tenga algun error se ejecuta:
    const onError = (error) => {
        console.log('error ->', error)
    }

    // Función de actualizar datos en base de datos
    const updateCity = async(data) => {
        await UpdateCityApi(currentId, data)
        setResetList(v => !v)
        reset()
        setCurrentId()
    }

    const loadCountry = async() => {
        const response = await getCountryApi(urlBaseCountry)
        setCountryList(response)
    }
    
    useEffect(() => {
        (async () => {
            await loadCountry();
        })();
    }, [resetList]);

    const loadCities = async () => {
        const response = await getCityApi(urlBase)
        setCityList(response)
    }

    useEffect(() => {
        (async () => {
            await loadCities();
        })();
    }, [resetList]);
    
    // Trae lenguaje por id y setea el formulario
    useEffect(() => {
        if (currentId) {
            (async() => {
                await GetByID()
            })()
            
        }
    }, [currentId])

    const GetByID = async() => {

        const data = await GetByIdCityApi(currentId)
            setValue('country_code', data.country_code)
            setValue('name', data.name)
            setValue('district', data.district)
            setValue('population', data.population)
            setValue('photo_city', data.photo_city)
            setValue('pollution_rate', data.pollution_rate)
    }

    const deleteCity = async (cityID) => {
        await DeleteCityApi(cityID)
        setResetList(v => !v)
    } 

    return {
        countryList,
        deleteCity,
        currentId,
        onSubmit,
        onError,
        cityList,
        setResetList,
        setCurrentId
    }
}