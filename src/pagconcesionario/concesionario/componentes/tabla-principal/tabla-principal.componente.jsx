import React from 'react';
import './tabla-principal.estilo.css';
import Coches from '../coches/coches.componente';
import TablaMarca from '../tabla-marca/tabla-marca.componente';



const TablaPrincipal = (props) => {
    return (
        <div className ="tabla-princial-cont">
            <Coches/>
            <TablaMarca utilidadList={props.utilidadList}/>
          
            
        </div>   
        
    );
   
}


export default TablaPrincipal;