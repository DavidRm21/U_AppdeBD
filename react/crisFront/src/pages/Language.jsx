import { TableLanguage } from '../components/TableLanguage'
import { CardLanguage } from '../components/CardLanguage'
import { ButtonCRUD } from '../components/ButtonCrud'
import { useForm } from 'react-hook-form'
import languegeController from '../controller/languegeController'

export const Language = () => {

    const {handleSubmit, register, reset, setValue} = useForm()

    const { 
        onSubmit,
        onError,
        languageList,
        setResetList,
        setCurrentId } = languegeController({reset, setValue});

    return (
        <main className='main-model'>

            <div className='container-form'>

            <form action="" onSubmit={handleSubmit(onSubmit, onError)} className='form-model'>
                <div className='form-title'>
                    <h2>Formulario:</h2>
                    <h3>Lenguajes</h3>
                </div>

                <div className="form-model-fields">

                    <label htmlFor="">Acronimo: 
                    </label>
                    <input {...register('acronym', {required: true})} type="text" maxLength={3} minLength={2} placeholder='Acronimo (3 carateres)'/>
                    
                    <label htmlFor="">Lenguaje: 
                    </label>
                    <input {...register('language')} type="text" maxLength={30} placeholder='Nombre del lenguaje'/>

                    <label htmlFor="">Estado 
                    </label>
                    <input {...register('is_official')} type="checkbox" />

                    <label htmlFor="">Porcentaje: 
                    </label>
                    <input {...register('percentage')} type="number" maxLength={5} placeholder='Porcentaje'/>

                    <label htmlFor="">ISO code: 
                    </label>
                    <input {...register('iso_code')} type="text" maxLength={2} minLength={1} placeholder='Codigo ISO (2 caracteres)'/>


                </div>

                <ButtonCRUD/>
                
            </form>

            <TableLanguage
            languageList = {languageList}
            reset = {setResetList}
            setCurrentId = {setCurrentId}
            />
            </div>

            <h2>Galería</h2>

            <div className="container-data">
                <CardLanguage
                listado={languageList}
                />
            </div>

        </main>
    )
}

