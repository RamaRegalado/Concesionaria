/*Etapa 2
Ahora que la concesionaria tiene los autos, 
es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y 
devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.*/

//Cuidado al usar arrow functions, te recomendamos usar function

const autos = require("./AlFinEsTiempoDeCoder(1) OK");
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
        }
       }
       console.log(concesionaria.buscarAuto("JJK116"));