import React,{useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
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
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Personaje = ({caracteristica}) => {
  
  //Configuración para el modal de material ui
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  
  const classes = useStyles()
  
  const handleOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  
  //Extrayendo valores del contexto modal
  const {informacion, guardarIdPersonaje, guardarInformacionPersonaje} = useContext(ModalContext)
  
  //Muestra y formatea los personajes
  const mostrarPersonajes = informacion => {
    let personajes = []
    // for(let i = 1; i < 16; i++) {
    //   // if(informacion[i]) {
    //   //   personajes.push(
    //   //     <li key={informacion[i]}>{informacion[i]}</li>
    //   //   )
    //   // }
    //   console.log(informacion[i])
    // }
    
    return personajes
  }
  
  
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{caracteristica.name}</h2>
        
        <img className="card-img-top" src={caracteristica.image} alt={`Imagen de ${caracteristica.name}`} />
        
        <div className="card-body">
          <button
            type="button"
            className="btn btn-clock btn-primary w-100"
            onClick={() => {
              guardarIdPersonaje(caracteristica.id )
              handleOpen()
            }}
          >
            Ver Detalles
          </button>
          
          <Modal
            open={open}
            onClose={() => {
              guardarIdPersonaje(null)
              guardarInformacionPersonaje({})
              handleClose()
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>Nombre</h2>
              
              <h3 className="mt-4">{caracteristica.name}</h3>
              
              <img className="img-fluid my-4 w-100" src={caracteristica.image} alt='Imagen'/>
              
              <h3>Más datos importantes</h3>
              
              <p>Género: {caracteristica.gender}</p>
              <p>Especie: {caracteristica.species}</p>
              <p>Estado: {caracteristica.status}</p>
              {/* <p>Espisodio: {caracteristica.episode}</p> */}
              
              <ul>
                {mostrarPersonajes(informacion)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
 
export default Personaje;