import React from 'react';
import '../hojas-de-estilo/contenedor.css';

function Contenedor(props) {
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
        <p className='texto-contenedor'>{props.texto}</p>
      </div>
    </div>
  );
}

export default Contenedor;