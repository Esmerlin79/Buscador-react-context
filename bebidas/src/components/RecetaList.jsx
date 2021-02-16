import React,{useContext} from 'react'
import Receta from './Receta'

import {RecetasContext} from '../context/RecetasContext'


const RecetaList = () => {

    const { recetas } = useContext(RecetasContext)

    return ( 
      <div className="row mt-5">
          {recetas.map(e => (
              <Receta 
                key={e.idDrink}
                receta ={e}
              />
          ))}
      </div>
     );
}
 
export default RecetaList;