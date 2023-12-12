import React from 'react'
import { DeleteCityApi } from '../api/City/DeleteCity'

export const TableCity = ({cityList, setResetList, setCurrentId, deleteCity}) => {

    return (    
        <div className="form-container">

            <table className='table-content'>
                <thead>
                    
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Población</th>
                        <th>Contaminación</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    {cityList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.population} M aprox.</td>
                            <td>{item.pollution_rate || 0} AQI</td>
                            <td className='table-icon table-icon-del'
                            onClick={() => deleteCity(item.id)}
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

