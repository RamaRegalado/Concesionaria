/*Más funcionalidades
El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta
 de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna
  función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.


Recordá utilizar el this para llamar a una funcionalidad dentro del mismo objeto literal.
*/
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
},
        autosNuevos: function(){
    let autosALaVenta = this.autosParaLaVenta();
    let autosALaVenta0Km = autosALaVenta.filter(function(auto0KM){
       return auto0KM.km < 100; 
    } )
    return autosALaVenta0Km;
},
        listaDeVentas:function(){
            let autosVendidos = autos.filter(function (autoVendido){
                return autoVendido.vendido == true
            });
           let totalDeVentas = autosVendidos.map(function(precioAutosVendidos){
                return precioAutosVendidos.precio;
            })
            return totalDeVentas;
        }
}
console.log(concesionaria.listaDeVentas())