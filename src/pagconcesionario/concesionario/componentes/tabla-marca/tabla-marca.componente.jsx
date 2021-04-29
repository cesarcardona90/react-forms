import React from 'react';
import './tabla-marca.estilo.css';
import Modelo from '../modelo/modelo.componente';
import Super from '../super/super.componente';


const TablaMarca = () => {
    return (
        <div className="tabla-marca.cont">
            <d>Modelo</d>   <d>Alquilado</d>   <d>   Disponibles</d>
             <Modelo nombreModelo="sport"/>
             <Super super={{ }}    />                             
           <Modelo nombreModelo="4x4"/>
             <Super super={{}}    />                
           
            

        </div>
    );
}

export default TablaMarca;