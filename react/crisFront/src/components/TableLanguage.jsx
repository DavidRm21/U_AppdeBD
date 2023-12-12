import React from 'react'
import '../styles/components/TableCity.sass'
import { deleteLanguageApi } from '../api/language/DeleteLanguage'

export const TableLanguage = ({languageList, reset, setCurrentId, deleteLanguage}) => {

    return (    
        <div className="form-container">

            <table className='table-content'>
                <thead>
                    
                    <tr>
                        <th>id</th>
                        <th>Acronimo</th>
                        <th>Lenguaje</th>
                        <th>Hablantes en el mundo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    {languageList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.acronym}</td>
                            <td>{item.language}</td>
                            <td>{item.percentage} %</td>
                            <td className='table-icon table-icon-del'
                            onClick={() => deleteLanguage(item.id)}></td>
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

