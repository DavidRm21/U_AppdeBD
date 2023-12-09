
export const CardLanguage = ({listado}) => {

    let languageList = listado

    return (
        <main className="main-card">

            {languageList.map(language => (

                <div className="card-container" key={language.id}>
                    
                    <div className="container-photo text-acronym">
                        <p>{language.acronym}</p>
                    </div>
                    
                    <div className='card-info'>
                        <p><b>{language.language}</b></p>
                        <p>Oficial: {language.is_official?'Si':'No'}</p>
                        <p>Porcentaje: {language.percentage || 0.0} % </p>
                        <p>ISO-code: {language.iso_code} </p>
                    </div>

                </div>
            ))}

        </main>
    )
}

