import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPersonajes from "./components/ListaPersonajes";

import PersonajesProvider from "./context/PersonajesContext";
import CaracteristicasProvider from './context/CaracteristicasContext'
import ModalProvider from './context/ModalContext'


function RickAndMortyApp() {
  return (
    <PersonajesProvider>
      <CaracteristicasProvider>
        <ModalProvider>
          
          <Header />
          
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            
            <ListaPersonajes />
          </div>
          
        </ModalProvider>
      </CaracteristicasProvider> 
    </PersonajesProvider>    
  );
}

export default RickAndMortyApp;
