import React, {useContext} from 'react'
import Personaje from './Personaje';

import {CaracteristicasContext} from '../context/CaracteristicasContext'

const ListaPersonajes = () => {
  
  //Extrayendo los personajes
  const {caracteristicas} = useContext(CaracteristicasContext)
    
  return (
    <div className="row mt-5">
      {caracteristicas.map(caracteristica => (
        <Personaje
          key={caracteristica.id}
          caracteristica={caracteristica}
        />
      ))}
    </div>
  );
}
 
export default ListaPersonajes;