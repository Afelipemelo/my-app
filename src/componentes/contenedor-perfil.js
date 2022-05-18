import React from 'react';
import '../hojas-de-estilo/contenedor copy.css';

function ContenedorPerfil(props) {
  return (
    <div className='contenedor-imagen-total'>
      <img 
        className='imagen-contenedor'
        src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
        alt='Foto de Cochinito'/>
              <div className='contenedor-total'>
        <p className='titulo-contenedor'>
          <strong>{props.titulo}</strong>
        </p>
        <p className='nombres'>{props.nombres}</p>
        <p className='fecha-nacimiento'>{props.fecha}</p>
        <p className='telefono'>{props.telefono}</p>
        <p className='correo'>{props.correo}</p>
        <p className='ahorro'>{props.ahorropersonal}</p>

      </div>
      </div>
  );
}

export default ContenedorPerfil;