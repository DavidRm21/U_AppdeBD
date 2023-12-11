import { useEffect, useState } from "react"
import { GetByIdLanguageApi } from "../api/language/GetByIDLanguage"
import { postLanguageApi } from "../api/language/PostLanguage"
import { updateLanguageApi } from "../api/language/UpdateLanguage"

export default function languegeController ({setValue, reset}) {

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

    return {
        onSubmit,
        onError,
        languageList,
        setResetList,
        setCurrentId
    }

}

    