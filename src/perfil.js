import React from 'react'
import './App.css';
import ContenedorPerfil from './componentes/contenedor-perfil';

function Perfil() {
    return ( 
        <section className="container-1">
           <ContenedorPerfil
          imagen='perfil'
          titulo='Perfil'
          nombres= 'Nombres: '
          fecha= 'Fecha de nacimiento: '
          telefono= 'Telefono: '
          correo= 'Correo: '
          ahorropersonal= 'Ahorro: '
           />
        
          </section>
    )
  }      

export default Perfil;