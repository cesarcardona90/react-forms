import React from 'react';
import './modelo.estilo.css';

const Modelo = (props) => {
    return (
        <div className="modelo-cont" >
          {props.nombreModelo}
        </div>   
    );
}

export default Modelo;