import React from 'react';
import TablaPrincipal from './componentes/tabla-principal/tabla-principal.componente';
import TablaForms from './componentes/tabla-forms/tabla-forms.componente';

const ConcesionarioPage = () => {

    let utilidadList = [
            {
                name:"sport",
                producto:[
                    {
                nombre:"CX3",
                 alquilado:10,
                 cantMarca:12,
                    },
                    {
                        nombre:"M9",
                         alquilado:1,
                          cantMarca:10,
                    },
                    {
                        nombre:"Sportage",
                        alquilado:0,
                        cantMarca:8,  
                    },
                    {
                        nombre:"Beat",
                         alquilado:10,
                          cantMarca:12,
                    },
                    {
                        nombre:"Cruze",
                        alquilado:10,
                         cantMarca:12,
                    },
                    {
                        nombre:"Spark",
                          alquilado:10,
                          cantMarca:12,
                    },
                ]
            },
            {
                name:"4x4",
                producto:[
                    {
                        nombre:"jeep",
                        alquilado:1,
                         cantMarca:10,
                    },
                    {
                        nombre:"ford",
                        alquilado:1,
                         cantMarca:10,
                    },
                    {
                        nombre:"toyota",
                        alquilado:1,
                         cantMarca:10,
                    }
                ]


            }
            
        ];
    
    return (
        <div>
            
            <TablaPrincipal/>
            
            <TablaForms utilidadList = {utilidadList}/>

            
                    
        </div>
       
       );
       
}

export default ConcesionarioPage;

