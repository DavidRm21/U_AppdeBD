
export const CardCountry = ({countryList}) => {
    
    return (
        <main className="main-card">

            {countryList.map(country => (

                <div className="card-container" key={country.id}>
                    
                    <figure className='container-photo'>
                        <img 
                        src={country.flag} alt={country.Aruba}
                        className='photo'
                        />
                    </figure>
                    
                        <div className="country-info-1">
                            <p><b>{country.name}</b></p>
                            <p>Población: {country.population} millones</p>
                            <p>Continente: {country.continent} </p>
                            <p>Superficie: {country.surface_area} Km2</p>
                            <p>Independencia: {country.indep_year}</p>
                        </div>

                        <div className="country-info-2">
                            <p>Nombre local: {country.local_name}</p>
                            <p>Forma de gobierno: {country.government_form}</p>
                            <p>Jefe de estado: {country.head_of_state}</p>
                            <p>capital: {country.capital}</p>
                            <p>Region: {country.region}  </p>
                            <p>Esperanza de vida: {country.life_expectancy}</p>
                            <p>Producto bruto actual: {country.gnp}</p>
                            <p>Producto bruto anterior: {country.gnp_old}</p>
                        </div>
                        
                        <div className="country-info-3">
                            <h3 className="title-national-anthem">Himno nacional</h3>
                            <div className="container-national-anthem">
                                <pre className="national-anthem">{country.national_anthem}</pre>
                            </div>
                        </div>
                    </div>

            ))}

        </main>
    )
}

