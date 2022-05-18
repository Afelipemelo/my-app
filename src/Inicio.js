import React from 'react'
import './App.css';
import Contenedor from './componentes/contenedor-inicio';

function Inicio() {
  return ( 
    <div className='Inicio'>
      <div className='contenedor-principal'>
        <h1>Bienvenido</h1>
        <Contenedor
          titulo='Sobre Nuestro Cochinito App'
          imagen='cochinito'
          texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
           <Contenedor
          titulo='¿Cómo se usa?'
          imagen='pensar'
          texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
           <Contenedor
          titulo='Ventajas'
          imagen='ventajas'
          texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
      </div>
    </div>
  );
}

export default Inicio;
