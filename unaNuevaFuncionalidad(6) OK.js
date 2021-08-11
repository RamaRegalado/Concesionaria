/*Una nueva funcionalidad extra
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. 
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. 
Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100.
  Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.

Recordá utilizar el this para ejecutar funciones dentro del mismo objeto literal.
*/

const autos = require("./autos(AlFinEsTiempoDeCoder(1)) OK");
const concesionaria = {
    marca: undefined,
      precio: undefined,
      km: undefined,
      color: undefined,
      cuotas: undefined,
      anio: undefined,
      patente: undefined,
      vendido: undefined,
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
},
autosNuevos: function(){
    let autosALaVenta = this.autosParaLaVenta();
    let autosALaVenta0Km = autosALaVenta.filter(function(auto0KM){
       return auto0KM.km < 100; 
    } )
    return autosALaVenta0Km;
}
}
            
    //console.log(concesionaria.autosNuevos());