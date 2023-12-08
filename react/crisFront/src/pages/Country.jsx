import { getCountryApi } from '../api/Country/GetCountry'
import { TableCountry } from '../components/TableCountry'
import { CardCountry } from '../components/CardCountry'
import '../styles/Country.sass'
import { useEffect, useState } from 'react'

export const Country = () => {

    const [countryList, setCountryList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowCountry'

    useEffect(() => {
        (async () => {
            await loadCountries();
        })();
    }, []);

    const loadCountries = async () => {
        const response = await getCountryApi(urlBase)
        setCountryList(response)
    }

    return (
        <main className='main-country'>

            <div className='container-form'>

                <form action="" className='form-country'>
                    <div className='form-title'>
                        <h2>Formulario:</h2>
                        <h3>País</h3>
                    </div>

                    <div className='form-country-fields'>

                        <label htmlFor="">Código: </label>
                        <input type="text" />

                        <label htmlFor="">Nombre: </label>
                        <input type="text" />

                        <label htmlFor="">Continente: </label>
                        <input type="text" />

                        <label htmlFor="">Región: </label>
                        <input type="text" />

                        <label htmlFor="">Superficie: </label>
                        <input type="text" />

                        <label htmlFor="">Población: </label>
                        <input type="text" />

                        <label htmlFor="">Esperanza de vida: </label>
                        <input type="text" />

                        <label htmlFor="">GNP actual: </label>
                        <input type="text" />

                        <label htmlFor="">GNP anterior: </label>
                        <input type="text" />

                        <label htmlFor="">Nombre local: </label>
                        <input type="text" />

                        <label htmlFor="">Forma de gobierno: </label>
                        <input type="text" />

                        <label htmlFor="">Jefe de estado: </label>
                        <input type="text" />

                        <label htmlFor="">Capital: </label>
                        <input type="text" />
                        
                        <label htmlFor="">Area cultivable: </label>
                        <input type="text" />

                        <label htmlFor="">Himno nacional: </label>
                        <input type="text" />

                        <label htmlFor="">Bandera: </label>
                        <input type="file" name="imagen" accept="image/*"/>

                        <label htmlFor="">Lenguajes: </label>
                        <input type="text" />

                    </div>
                    
                </form>

                <TableCountry
                listado = {countryList}
                />

            </div>

            <h2>Resultado</h2>

            <div className='container-data'>
                <CardCountry
                listado={countryList}
                />
            </div>




        </main>
    )
}
