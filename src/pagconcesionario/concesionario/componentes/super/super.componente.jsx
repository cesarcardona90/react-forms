import React from 'react';

import './super.estilo.css';

const Super = (props) => {
    return (
        <div className="super-cont">

          {
            props.super.cantMarca === 0
            ? <span className="super-without-cantMarca">{props.super.nombre}</span>
            : 
              <span>{props.super.nombre}</span>
          }
        
          {' '}
          
          {props.super.alquilado === 2
            ?<span className="super-without-alquilado">{props.super.Alquilado}</span>
          :  <span>{props.super.alquilado}</span>

          }
          {' '}
          {
            props.super.cantMarca
          }


        </div>   
    );
}

export default Super;