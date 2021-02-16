import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
// Crear el context
export const CategoriaContext = createContext()

// provider es donde se encuentran las funciones y state

const CategoriaProvider = (props) =>{

    //crear state del context
   const [categoria, setcategoria] = useState([])

   // ejecutar el llamado a la api
   useEffect(() =>{
    const getCategory = async () =>{
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const category = await axios.get(url)

        setcategoria(category.data.drinks)
    }
    getCategory()
   }, [])

    return (
        <CategoriaContext.Provider
        value={{
            categoria
        }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}
export default CategoriaProvider