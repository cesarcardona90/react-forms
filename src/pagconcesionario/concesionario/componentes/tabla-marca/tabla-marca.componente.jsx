import React from 'react';
import './tabla-marca.estilo.css';
import Modelo from '../modelo/modelo.componente';
import Super from '../super/super.componente';


const TablaMarca = (props) => {

    //console.log({props.utilidadList});
    return (
        <div className="tabla-marca.cont">
            {props.utilidadList.map((category, index)=>{
                return (<>
               <Modelo nombreModelo={category.name}/>
               </>);
            })}
                
        </div>
    );
}

export default TablaMarca;