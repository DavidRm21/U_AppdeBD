import { useEffect, useState } from "react"
import { GetByIdLanguageApi } from "../api/language/GetByIDLanguage"
import { postLanguageApi } from "../api/language/PostLanguage"
import { updateLanguageApi } from "../api/language/UpdateLanguage"
import { getLanguageApi } from "../api/Language/GetLanguage"
import { deleteLanguageApi } from "../api/language/DeleteLanguage"

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
        postLanguage(values)

    }

    const postLanguage = async (data) => {
        await postLanguageApi(data)
        setResetList(v => !v)
        reset()
    }



    // En caso de que el FORM contenga un error:
    const onError = (error) => {
        console.log('error ->', error)
    }

    // Función de actualizar datos en base de datos
    const updateLanguage = async (data) => {
        await updateLanguageApi(currentId, data)
        setResetList(v => !v)
        reset()
        setCurrentId()
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
            (async () => {
                await GetByID()
            })()
        }
    }, [currentId])

    const GetByID = async () => {
        
        const data = await GetByIdLanguageApi(currentId)
            setValue('acronym', data.acronym)
            setValue('language', data.language)
            setValue('is_official', data.is_official=='T')
            setValue('percentage', data.percentage)
            setValue('iso_code', data.iso_code)
    }

    const deleteLanguage = async (languageID) => {
        await deleteLanguageApi(languageID)
        setResetList(v => !v)
    } 

    

    return {
        deleteLanguage,
        onSubmit,
        onError,
        languageList,
        setResetList,
        setCurrentId
    }

}

    