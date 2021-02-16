import React,{createContext, useEffect, useState} from 'react'
import axios from 'axios'


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idrecta, setIdrecta] = useState(null)
    const [recetas, guardarReceta] = useState({})

    useEffect(() => {
       
       const getReceta = async () =>{
        if(!idrecta) return
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecta}`
        const result  = await axios.get(url)
        guardarReceta(result.data.drinks[0])

       }
       getReceta()
    }, [idrecta])

    return(
        <ModalContext.Provider
            value={{
                recetas,
                setIdrecta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider