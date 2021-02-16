import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const RecetasContext = createContext();

const RecetasProvider = (props) =>{

    const [recetas, guardarRecetas] = useState([])
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categorias:''
    })
    const [consultar, guardarConsultar] = useState(false)

    const {nombre, categorias} = busqueda

    useEffect(() =>{
        if(consultar){
            const getRecetas = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categorias}`
                const result = await axios.get(url)
                // console.log(result.data.drinks)
                guardarRecetas(result.data.drinks)
            }        
            getRecetas()
        }
        
    },[busqueda])
    return(
        <RecetasContext.Provider
            value={{
             recetas,
             buscarRecetas,
             guardarConsultar
             
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider