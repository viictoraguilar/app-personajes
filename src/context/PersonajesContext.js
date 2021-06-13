import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

//Creando el contexto para personajes
export const PersonajesContext = createContext()

//Provider: Aquí se encuentran las funciones y los estados
const PersonajesProvider = (props) => {
  
  //Creando el state
  const [personajes, guardarCategorias] = useState([])
  
  //Ejecutar el llamado a la api
  useEffect(() => {
    const obtenerPersonajes = async () => {
      const urlRick = 'https://rickandmortyapi.com/api/character'
      
      
      const personajes = await axios.get(urlRick)
      
      guardarCategorias(personajes.data.results);
    }
    obtenerPersonajes()
  }, [])
  
  return (
    <PersonajesContext.Provider
      value={{
        personajes 
      }}
    >
      {props.children}
    </PersonajesContext.Provider>
  )
}

export default PersonajesProvider
