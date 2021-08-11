/*Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y,
 en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. 
Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.

Cuidado al usar arrow functions.
*/
//const autos = require("./autos");
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
                    }        
                }


    //console.log(concesionaria.venderAuto("JJK116"));     