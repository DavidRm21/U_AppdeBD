import React, { useEffect, useState } from 'react'
import '../styles/City.sass'
import { TableCity } from '../components/TableCity'
import { getCityApi } from '../api/City/GetCity'
import { CardCity } from '../components/CardCity'

export const City = () => {

    const [cityList, setCityList] = useState([])
    const urlBase = 'http://localhost:8000/api/ShowCity/'

    useEffect(() => {
        (async () => {
            await loadCities();
        })();
    }, []);

    const loadCities = async () => {
        const response = await getCityApi(urlBase)
        setCityList(response)
    }

    return (
        <main className='main-city'>

            <div className='container-form'>

            <form action="" className='form-city'>
                <div className='form-title'>
                    <h2>Formulario:</h2>
                    <h3></h3>
                </div>

                <div className="form-city-fields">

                    <label htmlFor=""> Codigo:
                    </label>
                    <input type="text" placeholder='Escriba el código'/>

                    <label htmlFor="">Nombre: 
                    </label>
                    <input type="text" placeholder='Escriba nombre'/>

                    <label htmlFor="" >Distrito: 
                    </label>
                    <input type="text" placeholder='Escriba el distrito'/>

                    <label htmlFor="">Población:  
                    </label>
                    <input type="text" placeholder='Escriba la población'/>

                    <label htmlFor="">Foto ciudad: 
                    </label>
                    <input type="file" placeholder='Inserte la imagen'/>

                    <label htmlFor="">Contaminación: 
                    </label>
                    <input type="text" placeholder='Escriba el indice de contaminación'/>
                    
                </div>
                
            </form>

                <TableCity
                listado = {cityList}
                />

            </div>
            <h2>Resultados</h2>
            
            <div className='container-data'>
                <CardCity
                listado = {cityList}
                />
            </div>
            
        </main>
    )
}
