import { useEffect, useState } from 'react'
import { getLanguageApi } from '../api/Language/GetLanguage'
import { PostCountryApi } from '../api/Country/PostCountry'
import { UpdateCountryApi } from '../api/Country/UpdateCountry'
import { GetByIdCountryApi } from '../api/Country/GetByIdCountry'
import { getCountryApi } from '../api/Country/GetCountry'
import { DeleteCountryApi } from '../api/Country/DeleteCountry'

export default function countryController ({setValue, reset}) {
    
    const [currentId, setCurrentId] = useState()
    const [resetList, setResetList] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [languageList, setLanguageList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowCountry'
    const urlBaseLang = 'http://localhost:8000/api/ShowLanguage'
    const continent = ['Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America']

    // En el momento que se da click para actualizar o crear 
    const onSubmit = ( values ) => {

        const formData = new FormData()
        formData.append('code', values.code);
        formData.append('name', values.name);
        formData.append('continent', values.continent); 
        formData.append('region', values.region);
        formData.append('surface_area', values.surface_area);
        formData.append('indep_year', values.indep_year);
        formData.append('population', values.population);
        formData.append('life_expectancy', values.life_expectancy);
        formData.append('gnp', values.gnp);
        formData.append('gnp_old', values.gnp_old);
        formData.append('government_form', values.government_form);
        formData.append('head_of_state', values.head_of_state);
        formData.append('capital', values.capital);
        formData.append('arable_land_area', values.arable_land_area);
        formData.append('national_anthem', values.national_anthem);
        formData.append('flag', values.flag[0]);
        formData.append('languages', values.languages);
        
        if ( currentId ) {
            updateCountry(formData)
            return 
        }

        // Guardar los valores en la Base de datos
        postCountry( formData )

    }

    const postCountry = async(data) => {
        await PostCountryApi(data)
        setResetList(v => !v)
        reset()
    }

    // En caso de que el form tenga algun error se ejecuta:
    const onError = (error) => {
        console.log('error ->', error)
    }



    // Función de actualizar datos en base de datos
    const updateCountry = async(data) => {
        await UpdateCountryApi(currentId, data)
        setResetList(v => !v)
        reset()
        setCurrentId()
    }

    const loadCountries = async () => {
        const response = await getCountryApi(urlBase)
        setCountryList(response)
    }

    const loadLanguages = async () => {
        const response = await getLanguageApi(urlBaseLang)
        setLanguageList(response)
    }

    // Carga la lista de paises
    useEffect(() => {
        (async () => {
            await loadCountries();
        })();
    }, [resetList]);
    
    // Carga la lista de lenguajes
    useEffect(() => {
        (async () => {
            await loadLanguages();
        })();
    }, [resetList]);
    
    // Trae País por id y setea el formulario
    useEffect(() => {
        if (currentId) {
            (async () => {
                await GetByID()
            })()
        }
    }, [currentId])

    const GetByID = async() => {
        const data = await GetByIdCountryApi(currentId)
            setValue('code', data.code)
            setValue('name', data.name)
            setValue('continent', data.continent)
            setValue('region', data.region)
            setValue('surface_area', data.surface_area)
            setValue('indep_year', data.indep_year)
            setValue('population', data.population)
            setValue('life_expectancy', data.life_expectancy)
            setValue('gnp', data.gnp)
            setValue('gnp_old', data.gnp_old)
            setValue('local_name', data.local_name)
            setValue('government_form', data.government_form)
            setValue('head_of_state', data.head_of_state)
            setValue('capital', data.capital)
            setValue('arable_land_area', data.arable_land_area)
            setValue('national_anthem', data.national_anthem)
            setValue('flag', data.flag)
            setValue('languages', data.languages)
    }

    const deleteCountry = async (countryID) => {
        await DeleteCountryApi(countryID)
        setResetList(v => !v)
    } 

    return {
        deleteCountry,
        currentId,
        onSubmit,
        onError,
        countryList,
        languageList,
        setResetList,
        setCurrentId,
        continent
    }
}