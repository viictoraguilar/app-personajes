import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'
export const CaracteristicasContext = createContext() 


const CaracteristicasProvider = (props) => {
  
  const [caracteristicas, guardarCaracteristicas] = useState([])
  const [busqueda, buscarCaracteristicas] = useState({
    nombre: ''
  })
  
  const [consultar, guardarConsultar] = useState(false)
  
  const {nombre} = busqueda
  
  useEffect(() => {
    
    if(consultar) {
      const obtenerCaracteristicas = async () => {
        // const url = `https://rickandmortyapi.com/api/character/?name=${nombre}&status=${estado}`
        const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`
        
        const resultado = await axios.get(url)
        
        // console.log(resultado.data.results);
        guardarCaracteristicas(resultado.data.results)
      }
      
      obtenerCaracteristicas()
    }
    
  }, [busqueda])
  
  return (
    <CaracteristicasContext.Provider
      value={{
        caracteristicas,
        buscarCaracteristicas,
        guardarConsultar
      }}
    >
      {props.children}
    </CaracteristicasContext.Provider>
  );
}
 
export default CaracteristicasProvider;