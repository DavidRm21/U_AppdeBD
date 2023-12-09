
export const CardCity = ({listado}) => {

    let cityList = listado

    return (
        <main className="main-card">

            {cityList.map(city => (

                <div className="card-container" key={city.id}>
                    
                    <figure className='container-photo'>
                        <img 
                        src={city.photo_city} alt={city.name}
                        className='photo'
                        />
                    </figure>
                    
                    <div className='card-info'>
                        <p><b>{city.name}</b></p>
                        <p>Población: {city.population} {city.population == 1 ? 'millón':'millones'} aprox.</p>
                        <p>contaminación: {city.pollution_rate || 0.0} % </p>
                        <p>Distrito: {city.district} </p>
                    </div>

                </div>
            ))}

        </main>
    )
}

