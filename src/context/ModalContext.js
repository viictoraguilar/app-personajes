import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {
  
  //state del provider
  const [idpersonaje, guardarIdPersonaje] = useState(null)
  const [informacion, guardarInformacionPersonaje] = useState({
    
  })
  
  //Una vez que tenemos el personaje se llama la api
  useEffect(() => {
    const obtenerPersonaje = async () => 
    {
      if(!idpersonaje) return
      
      const url = `https://rickandmortyapi.com/api/character/?id=${idpersonaje}`
    
      const resultado = await axios.get(url)
      
      guardarInformacionPersonaje(resultado.data.results);
      
      
    
    }
    obtenerPersonaje()
  }, [idpersonaje])
  
  
  return (
    <ModalContext.Provider
      value={{
        informacion,
        guardarIdPersonaje,
        guardarInformacionPersonaje
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
 
export default ModalProvider;