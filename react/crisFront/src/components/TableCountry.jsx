import React from 'react'
import { DeleteCountryApi } from '../api/Country/DeleteCountry'

export const TableCountry = ({ countryList, setResetList, setCurrentId }) => {

    const deleteCountry = (languageID) => {
        DeleteCountryApi(languageID).then(() => {
            setResetList(v => !v)
        })
        .catch(console.error)
    } 

    return (    
        <div className="form-container">

            <div className="table-header">
                <h2></h2>
            </div>

            <table className='table-content'>
                <thead>
                    
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Capital</th>
                        <th>Continente</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    {countryList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.capital}</td>
                            <td>{item.continent}</td>
                            <td className='table-icon table-icon-del'
                            onClick={() => deleteCountry(item.id)}
                            ></td>
                            <td className='table-icon table-icon-look'
                            onClick={() => setCurrentId(item.id)}
                            ></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

