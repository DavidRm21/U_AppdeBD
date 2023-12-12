import { TableCity } from '../components/TableCity'
import { CardCity } from '../components/CardCity'
import { ButtonCRUD } from '../components/ButtonCrud'
import { useForm } from 'react-hook-form'
import countryController from '../controller/cityController'


export const City = () => {

    const { handleSubmit, register, reset, setValue } = useForm()

    const {
        countryList,
        deleteCity,
        currentId,
        onSubmit,
        onError,
        cityList,
        setResetList,
        setCurrentId } = countryController({reset, setValue});



    return (
        <main className='main-model'>

            <div className='container-form'>

            <form action="" onSubmit={handleSubmit( onSubmit, onError )} className='form-model' encType='multipart/form-data'>
                <div className='form-title'>
                    <h2>Formulario:</h2>
                    <h3>Ciudades</h3>
                </div>

                <div className="form-model-fields">

                    {/* <label>Código</label>
                    <select {...register('country_code', { required: true })}>
                        {countryList.map((country) => (
                            <option key={country.id} value={country.id}>{country.id} - {country.code}</option>
                        ))}
                    </select> */}

                    <label htmlFor=""> Codigo:
                    </label>
                    <input {...register('country_code', { required: true })} type="number" placeholder='Escriba el código'/>

                    <label htmlFor="">Nombre: 
                    </label>
                    <input {...register('name')} type="text" placeholder='Escriba nombre'/>

                    <label htmlFor="" >Distrito: 
                    </label>
                    <input {...register('district')} type="number" placeholder='Escriba el numero de distrito'/>

                    <label htmlFor="">Población:  
                    </label>
                    <input {...register('population')} type="number" placeholder='Escriba la población'/>

                    <label htmlFor="">Foto ciudad: 
                    </label>
                    <input {...register('photo_city')} type="file"/>

                    <label htmlFor="">Contaminación: 
                    </label>
                    <input {...register('pollution_rate')} type="number" placeholder='Escriba el indice de contaminación'/>
                    
                </div>

                <ButtonCRUD/>
                
            </form>

                <TableCity
                setResetList= {setResetList}
                cityList = {cityList}
                setCurrentId = {setCurrentId}
                deleteCity = {deleteCity}
                />

            </div>
            <h2>Galería</h2>
            
            <div className='container-data'>
                <CardCity
                listado = {cityList}
                />
            </div>
            
        </main>
    )
}
