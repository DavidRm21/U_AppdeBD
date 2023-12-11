import { useEffect, useState } from 'react'
import { TableCity } from '../components/TableCity'
import { getCityApi } from '../api/City/GetCity'
import { CardCity } from '../components/CardCity'
import { ButtonCRUD } from '../components/ButtonCrud'
import { useForm } from 'react-hook-form'
import { UpdateCityApi } from '../api/City/UpdateCity'
import { PostCityApi } from '../api/City/PostCity'
import { GetByIdCityApi } from '../api/City/GetByIdCity'

export const City = () => {

    const { handleSubmit, register, reset, setValue } = useForm()
    const [currentId, setCurrentId] = useState()
    const [resetList, setResetList] = useState(false)
    const [cityList, setCityList] = useState([])

    // En el momento que se da click para actualizar o crear 
    const onSubmit = ( values ) => {
        
        console.log(values.photo_city
            )
        if ( currentId ) {
            updateCity(values)
            return 
        }

        // Guardar los valores en la Base de datos
        PostCityApi( values )
                            .then((response) => {
                                console.log('Registro cargado: ', response)
                                setResetList(v => !v)
                                reset()            
                            }).catch(() =>{
                                console.log('Error: ', values)
                                console.error
                            })
    }

    // En caso de que el form tenga algun error se ejecuta:
    const onError = (error) => {
        console.log('error ->', error)
    }

    // Función de actualizar datos en base de datos
    const updateCity = (data) => {
        UpdateCityApi(currentId, data)
                            .then(() => {
                                setResetList(v => !v)
                                reset()
                                setCurrentId()
                            })
                            .catch(console.error)
    }
    
    const loadCities = async () => {
        const response = await getCityApi()
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
            GetByIdCityApi(currentId).then(({data}) => {
            setValue('country_code', data.country_code)
            setValue('name', data.name)
            setValue('district', data.district)
            setValue('population', data.population)
            setValue('photo_city', data.photo_city)
            setValue('pollution_rate', data.pollution_rate)
            }).catch(console.error)
        }
    }, [currentId])


    return (
        <main className='main-model'>

            <div className='container-form'>

            <form action="" onSubmit={handleSubmit( onSubmit, onError )} className='form-model' encType='multipart/form-data'>
                <div className='form-title'>
                    <h2>Formulario:</h2>
                    <h3>Ciudades</h3>
                </div>

                <div className="form-model-fields">

                    <label htmlFor=""> Codigo:
                    </label>
                    <input {...register('country_code', { required: true })} type="number" placeholder='Escriba el código'/>

                    <label htmlFor="">Nombre: 
                    </label>
                    <input {...register('name')} type="text" placeholder='Escriba nombre'/>

                    <label htmlFor="" >Distrito: 
                    </label>
                    <input {...register('district')} type="number" placeholder='Escriba el numero de distrito'/>

                    <label htmlFor="">Población:  
                    </label>
                    <input {...register('population')} type="number" placeholder='Escriba la población'/>

                    <label htmlFor="">Foto ciudad: 
                    </label>
                    <input {...register('photo_city')} type="file"/>

                    <label htmlFor="">Contaminación: 
                    </label>
                    <input {...register('pollution_rate')} type="number" placeholder='Escriba el indice de contaminación'/>
                    
                </div>

                <ButtonCRUD/>
                
            </form>

                <TableCity
                setResetList= {setResetList}
                cityList = {cityList}
                setCurrentId = {setCurrentId}
                />

            </div>
            <h2>Galería</h2>
            
            <div className='container-data'>
                <CardCity
                listado = {cityList}
                />
            </div>
            
        </main>
    )
}
