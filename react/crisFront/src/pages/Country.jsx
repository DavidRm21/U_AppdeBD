import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getCountryApi } from '../api/Country/GetCountry'
import { TableCountry } from '../components/TableCountry'
import { CardCountry } from '../components/CardCountry'
import { ButtonCRUD } from '../components/ButtonCrud'
import { getLanguageApi } from '../api/Language/GetLanguage'
import { PostCountryApi } from '../api/Country/PostCountry'
import { UpdateCountryApi } from '../api/Country/UpdateCountry'
import { GetByIdCountryApi } from '../api/Country/GetByIdCountry'

export const Country = () => {

    const { handleSubmit, register, reset, setValue } = useForm()
    const [currentId, setCurrentId] = useState()
    const [resetList, setResetList] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [languageList, setLanguageList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowCountry'
    const urlBaseLang = 'http://localhost:8000/api/ShowLanguage'
    const continent = ['Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America']

    // En el momento que se da click para actualizar o crear 
    const onSubmit = ( values ) => {

        values.national_anthem == '' ? values.national_anthem =null: values.national_anthem
        values.flag = null

        if ( currentId ) {
            updateCountry(values)
            return 
        }

        // Guardar los valores en la Base de datos
        PostCountryApi( values )
                            .then((response) => {
                                console.log('Registro cargado: ', response)
                                setResetList(v => !v)
                                reset()            
                            }).catch(console.error)
    }

    // En caso de que el form tenga algun error se ejecuta:
    const onError = (error) => {
        console.log('error ->', error)
    }



    // Función de actualizar datos en base de datos
    const updateCountry = (data) => {
        UpdateCountryApi(currentId, data)
                            .then(() => {
                                setResetList(v => !v)
                                reset()
                                setCurrentId()
                            })
                            .catch(console.error)
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
            GetByIdCountryApi(currentId).then(({data}) => {
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
            }).catch(console.error)
        }
    }, [currentId])


    return (
        <main className='main-model'>

            <div className='container-form'>

                <form action="" className='form-model' onSubmit={ handleSubmit(onSubmit, onError)}>
                    <div className='form-title'>
                        <h2>Formulario:</h2>
                        <h3>País</h3>
                    </div>

                    <div className='form-model-fields'>

                        <label htmlFor="">Código: </label>
                        <input {...register('code', { required: true })} type="text" placeholder='Código (3 caracteres)' maxLength={3}/>

                        <label htmlFor="">Nombre: </label>
                        <input {...register('name', { required: true })} type="text" placeholder='Nombre del país' maxLength={50} />

                        <label htmlFor="">Continente: </label>
                        <select {...register('continent', { required: true })} >
                            {
                                continent.map(opt => (<option key={opt}>{opt}</option>))
                            }
                        </select>

                        <label htmlFor="">Región: </label>
                        <input {...register('region', { required: true })} type="text" placeholder='Región'/>

                        <label htmlFor="">Superficie: </label>
                        <input {...register('surface_area', { required: true })} type="number" placeholder='Superficie en km2' maxLength={10}/>

                        <label htmlFor="">Población: </label>
                        <input {...register('population', { required: true })} type="number" placeholder='Escriba la población'/>

                        <label htmlFor="">Año independencia: </label>
                        <input {...register('indep_year')} type="number" placeholder='Escriba la población'/>
                        
                        <label htmlFor="">Esperanza de vida: </label>
                        <input {...register('life_expectancy', { required: true })} type="number" placeholder='Escriba la esperanza de vida' maxLength={5}/>

                        <label htmlFor="">GNP actual: </label>
                        <input {...register('gnp')} type="number" placeholder='Escriba el Producto nacional bruto actual' maxLength={10}/>

                        <label htmlFor="">GNP anterior: </label>
                        <input {...register('gnp_old')} type="number" placeholder='Producto nacional bruto anterior' maxLength={10}/>

                        <label htmlFor="">Nombre local: </label>
                        <input {...register('local_name', { required: true })} type="text" placeholder='Escriiba el nombre local' maxLength={50}/>

                        <label htmlFor="">Forma de gobierno: </label>
                        <input {...register('government_form', { required: true })} type="text" placeholder='Escriba la forma de gobierno' maxLength={50}/>

                        <label htmlFor="">Presidente: </label>
                        <input {...register('head_of_state', { required: true })} type="text" placeholder='Escriba jefe de estado' maxLength={60}/>

                        <label htmlFor="">Capital: </label>
                        <input {...register('capital')} type="text" placeholder='Esciba la capital' maxLength={50}/>
                        
                        <label htmlFor="">Area cultivable: </label>
                        <input {...register('arable_land_area', { required: true })} type="number" placeholder='Escriba el area en km2' maxLength={10}/>

                        <label htmlFor="">Himno nacional: </label>
                        <input {...register('national_anthem')} type="text" placeholder='Coloque el himno nacional aquí'/>

                        <label htmlFor="">Bandera: </label>
                        <input {...register('flag')} type="file" name="imagen" accept="image/*"/>

                        <label htmlFor="">Lenguajes: </label>
                        <select multiple name="" id="" {...register('languages', { required: true })}>
                        {
                            languageList.map(lang => (
                                <option key={lang.id} value={lang.id} >{lang.id} - {lang.language}</option>
                            ))
                        }
                        </select>


                    </div>

                    <ButtonCRUD
                    reset={reset}
                    setResetList={setResetList}
                    currentId={currentId}
                    />
                    
                </form>


                <TableCountry
                countryList = {countryList}
                setResetList = {setResetList}
                setCurrentId = {setCurrentId}
                />

            </div>

            <h2>Galería</h2>

            <div className='container-data'>
                <CardCountry
                countryList={countryList}
                />
            </div>

        </main>
    )
}
