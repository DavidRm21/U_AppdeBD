import { useEffect, useState } from 'react'
import { TableLanguage } from '../components/TableLanguage'
import { getLanguageApi } from '../api/Language/GetLanguage'
import { CardLanguage } from '../components/CardLanguage'

export const Language = () => {

    const [languageList, setLanguageList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowLanguage'

    useEffect(() => {
        (async () => {
            await loadLanguages();
        })();
    }, []);

    const loadLanguages = async () => {
        const response = await getLanguageApi(urlBase)
        setLanguageList(response)
    }

    return (
        <main className='main-model'>

            <div className='container-form'>

            <form action="" className='form-model'>
                <div className='form-title'>
                    <h2>Formulario:</h2>
                    <h3>Lenguajes</h3>
                </div>

                <div className="form-model-fields">

                    <label htmlFor="">Lenguaje: 
                    </label>
                    <input type="text" />

                    <label htmlFor="">Activate: 
                    </label>
                    <input type="text" />

                    <label htmlFor="">Porcentaje: 
                    </label>
                    <input type="text" />

                    <label htmlFor="">ISO code: 
                    </label>
                    <input type="text" />

                    <label htmlFor="">Nivel de lenguaje: 
                    </label>
                    <input type="text" />

                </div>
                
            </form>

            <TableLanguage
            listado = {languageList}
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

