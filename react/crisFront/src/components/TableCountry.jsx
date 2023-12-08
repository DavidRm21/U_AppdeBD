import React from 'react'
import '../styles/TableCity.sass'

export const TableCountry = ({listado}) => {

    let countryList = listado

    return (    
        <div className="form-container">

            <div className="table-header">
                <h2></h2>
            </div>

            <table className='table-content'>
                <thead>
                    
                    <tr>
                        <th>Nombre</th>
                        <th>Continente</th>
                        <th>Capital</th>
                        <th>Población</th>
                    </tr>
                </thead>

                <tbody>

                    {countryList.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.continent}</td>
                            <td>{item.capital}</td>
                            <td>{item.population} M</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

