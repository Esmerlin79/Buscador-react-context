import React,{useContext, useState} from 'react'
import {ModalContext} from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    // Configuracion del modal de material ui
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const {setIdrecta, recetas, guardarReceta} = useContext(ModalContext)
    // console.log(recetas)
    const {strDrink, strDrinkThumb} = receta
    // muestra y formate los ingrdientes
    const showInfo = (info) => {
        let arr = []
        for(let i = 1;i < 16; i++ ){
            if(info[`strIngredient${i}`]){
                arr.push(
                    <li>{info[`strIngredient${i}`] }
                    {info[`strMeasure${i}`] }
                    </li>
                )
            }
        }
        return arr
    }
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>
                <img className="card-img-top" src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}/>
                
                <div className="card-body">
                    <button 
                    onClick={() => {
                      setIdrecta(receta.idDrink)
                      handleOpen()
                    }} 
                    className="btn btn-block btn-primary">
                        Ver Receta
                    </button>

                    <Modal
                      open ={open}  
                      onClose={() =>{
                        handleClose()
                        setIdrecta(null)
                        guardarReceta({})
                      }}
                    >
                        <div style={modalStyle} 
                        className={classes.paper}>
                            <h2>{recetas.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {recetas.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={recetas.strDrinkThumb}/>
                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                {showInfo(recetas)}
                            </ul>
                        </div>
                        
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;