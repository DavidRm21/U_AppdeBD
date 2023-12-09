
export const CardCountry = ({listado}) => {

    let countryList = listado
    
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
                    
                    <div className='card-info'>
                        <p><b>{country.name}</b></p>
                        <p>Población: {country.population} millones</p>
                        <p>Continente: {country.continent} </p>
                        <p>Region: {country.region}  </p>
                        <p>Superficie: {country.surface_area} </p>
                        <p>Independencia: {country.indep_year}</p>
                        <p>Esperanza de vida: {country.life_expectancy}</p>
                        <p>Producto bruto actual: {country.gnp}</p>
                        <p>Producto bruto anterior: {country.gnp_old}</p>
                        <p>Nombre local: {country.local_name}</p>
                        <p>Forma de gobierno: {country.government_form}</p>
                        <p>Jefe de estado: {country.head_of_state}</p>
                        <p>capital: {country.capital}</p>
                        <p>lenguajes: {country.languages}</p>
                    </div>

                </div>
            ))}

        </main>
    )
}

