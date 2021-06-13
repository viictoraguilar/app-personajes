import React, { useContext, useState } from 'react';
import { CaracteristicasContext } from '../context/CaracteristicasContext';
import {PersonajesContext} from '../context/PersonajesContext'

const Formulario = () => {
  
  const [busqueda, guardarBusqueda] = useState({
    estado: '',
    personaje: ''
  })
  
  const {personajes} = useContext(PersonajesContext) 
  const {buscarCaracteristicas, guardarConsultar} = useContext(CaracteristicasContext) 
  
  //function para leer contenidos
  const obtenerDatosPersonaje = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }
  
  console.log(personajes);
  
  return (
    <form
      className="col-12"
      onSubmit={e => {
        e.preventDefault()
        buscarCaracteristicas(busqueda)
        guardarConsultar(true)
      }}
    >
      <fieldset className="text-center">
        <legend>Buscar personaje por nombre</legend>
      </fieldset>
      
      <div className="row mt-4">
        
        <div className="col-md-6">
          <select 
            className="form-control"
            name="nombre" 
            onChange={obtenerDatosPersonaje}
          >
            <option value="">-- Selecciona el nombre del Personaje --</option>  
            {personajes.map(personaje => (
              <option 
                key={personaje.name}
                value={personaje.name}
              >{personaje.name}</option>
            ))}          
          </select>
        </div>
        
        <div className="col-md-6">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Personaje"
          />
        </div>
      </div>
    </form>
  );
}
 
export default Formulario;