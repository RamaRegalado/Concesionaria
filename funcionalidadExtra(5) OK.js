/*Funcionalidad extra
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta.
 A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos,
  usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos
   que ya fueron vendidos.

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. 
Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.*/

//Recordá utilizar el this para llamar a una función definida dentro del mismo objeto literal.

 const autos = require("./autos(AlFinEsTiempoDeCoder(1)) OK");
    const concesionaria = {
           autos: autos,
           buscarAuto: function(miPatente){
               let autoABuscar = null;
               for(i=0; i<autos.length;i++){
                   if(miPatente == concesionaria.autos[i].patente){
                       return autoABuscar = concesionaria.autos[i];
                    }
                }
                return autoABuscar
            },
            venderAuto:  function(miPatente)  {
                    let autoAVender = this.buscarAuto(miPatente);
                     autoAVender.vendido = true;
                     return autoAVender;
                    },
            autosParaLaVenta: function(){
                let autosALaVenta = autos.filter(function(autoParaVender){
                return autoParaVender.vendido == false;
            })
        return autosALaVenta;
    }
        }

           /* autosParaLaVenta: function (){
                for(i=0; i<autos.length;i++){
                   let obaba = autos[i].vendido.filter(function(){
                    
                    })
                    }
                }*/
                console.log(concesionaria.autosParaLaVenta())