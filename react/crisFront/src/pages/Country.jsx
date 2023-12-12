import { useForm } from 'react-hook-form'
import countryController from '../controller/countryController'
import { TableCountry } from '../components/TableCountry'
import { CardCountry } from '../components/CardCountry'
import { ButtonCRUD } from '../components/ButtonCrud'


export const Country = () => {

    const { handleSubmit, register, reset, setValue } = useForm()

    const { 
        deleteCountry,
        currentId,
        continent,
        onSubmit,
        onError,
        languageList,
        countryList,
        setResetList,
        setCurrentId } = countryController({reset, setValue});

    return (
        <main className='main-model'>

            <div className='container-form'>

                <form action="" className='form-model' onSubmit={ handleSubmit(onSubmit, onError)} encType='multipart/form-data'>
                    <div className='form-title'>
                        <h2>Formulario:</h2>
                        <h3>País</h3>
                    </div>

                    <div className='form-model-fields'>

                        <label htmlFor="">Código: </label>
                        <input {...register('code', { required: true })} type="text" placeholder='Código (3 caracteres)' maxLength={3}/>

                        <label htmlFor="">Nombre: </label>
                        <input {...register('name', { required: true })} type="text" placeholder='Nombre del país' maxLength={50} />

                        <label htmlFor="">Continente: </label>
                        <select {...register('continent', { required: true })} >
                            {
                                continent.map(opt => (<option key={opt}>{opt}</option>))
                            }
                        </select>

                        <label htmlFor="">Región: </label>
                        <input {...register('region', { required: true })} type="text" placeholder='Región'/>

                        <label htmlFor="">Superficie: </label>
                        <input {...register('surface_area', { required: true })} type="number" placeholder='Superficie en km2' maxLength={10}/>

                        <label htmlFor="">Población: </label>
                        <input {...register('population', { required: true })} type="number" placeholder='Escriba la población'/>

                        <label htmlFor="">Año independencia: </label>
                        <input {...register('indep_year')} type="number" placeholder='Escriba la población'/>
                        
                        <label htmlFor="">Esperanza de vida: </label>
                        <input {...register('life_expectancy', { required: true })} type="number" placeholder='Escriba la esperanza de vida' maxLength={5}/>

                        <label htmlFor="">GNP actual: </label>
                        <input {...register('gnp')} type="number" placeholder='Escriba el Producto nacional bruto actual' maxLength={10}/>

                        <label htmlFor="">GNP anterior: </label>
                        <input {...register('gnp_old')} type="number" placeholder='Producto nacional bruto anterior' maxLength={10}/>

                        <label htmlFor="">Nombre local: </label>
                        <input {...register('local_name', { required: true })} type="text" placeholder='Escriiba el nombre local' maxLength={50}/>

                        <label htmlFor="">Forma de gobierno: </label>
                        <input {...register('government_form', { required: true })} type="text" placeholder='Escriba la forma de gobierno' maxLength={50}/>

                        <label htmlFor="">Presidente: </label>
                        <input {...register('head_of_state', { required: true })} type="text" placeholder='Escriba jefe de estado' maxLength={60}/>

                        <label htmlFor="">Capital: </label>
                        <input {...register('capital')} type="text" placeholder='Esciba la capital' maxLength={50}/>
                        
                        <label htmlFor="">Area cultivable: </label>
                        <input {...register('arable_land_area', { required: true })} type="number" placeholder='Escriba el area en km2' maxLength={10}/>

                        <label htmlFor="">Himno nacional: </label>
                        <input {...register('national_anthem')} type="text" placeholder='Coloque el himno nacional aquí'/>

                        <label htmlFor="">Bandera: </label>
                        <input {...register('flag')} type="file"/>

                        <label htmlFor="">Lenguajes: </label>
                        <select multiple name="" id="" {...register('languages', { required: true })}>
                        {
                            languageList.map(lang => (
                                <option key={lang.id} value={lang.id} >{lang.id} - {lang.language}</option>
                            ))
                        }
                        </select>


                    </div>

                    <ButtonCRUD
                    reset={reset}
                    setResetList={setResetList}
                    currentId={currentId}
                    />
                    
                </form>


                <TableCountry
                countryList = {countryList}
                setResetList = {setResetList}
                setCurrentId = {setCurrentId}
                deleteCountry = {deleteCountry}
                />

            </div>

            <h2>Galería</h2>

            <div className='container-data'>
                <CardCountry
                countryList={countryList}
                />
            </div>

        </main>
    )
}
