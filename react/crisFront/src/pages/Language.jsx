import { useEffect, useState } from 'react'
import { TableLanguage } from '../components/TableLanguage'
import { getLanguageApi } from '../api/Language/GetLanguage'
import { CardLanguage } from '../components/CardLanguage'
import { ButtonCRUD } from '../components/ButtonCrud'
import { useForm } from 'react-hook-form'
import { postLanguageApi } from '../api/language/PostLanguage'
import { GetByIdLanguageApi } from '../api/language/GetByIDLanguage'
import { updateLanguageApi } from '../api/language/UpdateLanguage'

export const Language = () => {

    const {handleSubmit, register, reset, setValue} = useForm()
    const [currentId, setCurrentId] = useState()
    const [resetList, setResetList] = useState(false)
    const [languageList, setLanguageList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowLanguage'

    // En el momento que se da click para actualizar o crear 
    const onSubmit = ( values ) => {

        values.is_official = values.is_official?'T':'F'

        if ( currentId ) {
            updateLanguage(values)
            return 
        }

        // Guardar los valores en la Base de datos
        postLanguageApi( values )
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
    const updateLanguage = (data) => {
        updateLanguageApi(currentId, data)
                            .then(() => {
                                setResetList(v => !v)
                                reset()
                                setCurrentId()
                            })
                            .catch(console.error)
    }
    
    // Carga la lista de lenguajes
    useEffect(() => {
        (async () => {
            await loadLanguages();
        })();
    }, [resetList]);

    // Obtiene la data de la base de datos:
    const loadLanguages = async () => {
        const response = await getLanguageApi(urlBase)
        setLanguageList(response)
    }

    // Trae lenguaje por id y setea el formulario
    useEffect(() => {
        if (currentId) {
            GetByIdLanguageApi(currentId).then(({data}) => {
            setValue('acronym', data.acronym)
            setValue('language', data.language)
            setValue('is_official', data.is_official=='T')
            setValue('percentage', data.percentage)
            setValue('iso_code', data.iso_code)
            }).catch(console.error)
        }
    }, [currentId])


    return (
        <main className='main-model'>

            <div className='container-form'>

            <form action="" onSubmit={handleSubmit(onSubmit, onError)} className='form-model'>
                <div className='form-title'>
                    <h2>Formulario:</h2>
                    <h3>Lenguajes</h3>
                </div>

                <div className="form-model-fields">

                    <label htmlFor="">Acronimo: 
                    </label>
                    <input {...register('acronym', {required: true})} type="text" maxLength={3} minLength={2} placeholder='Acronimo (3 carateres)'/>
                    
                    <label htmlFor="">Lenguaje: 
                    </label>
                    <input {...register('language')} type="text" maxLength={30} placeholder='Nombre del lenguaje'/>

                    <label htmlFor="">Estado 
                    </label>
                    <input {...register('is_official')} type="checkbox" />

                    <label htmlFor="">Porcentaje: 
                    </label>
                    <input {...register('percentage')} type="number" maxLength={5} placeholder='Porcentaje'/>

                    <label htmlFor="">ISO code: 
                    </label>
                    <input {...register('iso_code')} type="text" maxLength={2} minLength={1} placeholder='Codigo ISO (2 caracteres)'/>


                </div>

                <ButtonCRUD/>
                
            </form>

            <TableLanguage
            languageList = {languageList}
            reset = {setResetList}
            setCurrentId = {setCurrentId}
            />
            </div>

            <h2>Galería</h2>

            <div className="container-data">
                <CardLanguage
                listado={languageList}
                />
            </div>

        </main>
    )
}

