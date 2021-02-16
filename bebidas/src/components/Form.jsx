import React,{useContext, useState} from 'react'
import {CategoriaContext} from '../context/CategoriaContext'
import {RecetasContext} from '../context/RecetasContext'

const Form = () => {
    
    const [busqueda, setbusqueda] = useState({
        nombre: '',
        categorias: '',
    })

    const {nombre, categorias} = busqueda

    const {categoria} = useContext(CategoriaContext)
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext)
    
    const handleChange = e =>{

        setbusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                buscarRecetas(busqueda)
                guardarConsultar(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o Ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categorias"
                        onChange={handleChange}
                    >
                     <option value="">Selecciona Categoria</option>

                     {categoria.map(e => (
                         <option 
                          key={e.strCategory} 
                          value={e.strCategory}>{e.strCategory}</option>
                     ))}

                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;