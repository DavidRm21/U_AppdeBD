import React from 'react'
import '../styles/TableCity.sass'

export const TableLanguage = ({listado}) => {

    let languageList = listado

    return (    
        <div className="form-container">

            <table className='table-content'>
                <thead>
                    
                    <tr>
                        <th>id</th>
                        <th>Acronimo</th>
                        <th>Lenguaje</th>
                        <th>Hablantes en el mundo</th>
                    </tr>
                </thead>

                <tbody>

                    {languageList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.acronym}</td>
                            <td>{item.language}</td>
                            <td>{item.percentage} %</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

