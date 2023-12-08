import React from 'react'
import '../styles/TableCity.sass'

export const TableCity = ({listado}) => {

    let cityList = listado

    return (    
        <div className="form-container">

            <table className='table-content'>
                <thead>
                    
                    <tr>
                        <th>Nombre</th>
                        <th>Distritos</th>
                        <th>Población</th>
                        <th>Contaminación</th>
                    </tr>
                </thead>

                <tbody>

                    {cityList.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.district}</td>
                            <td>{item.population} M aprox.</td>
                            <td>{item.pollution_rate || 0} AQI</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

