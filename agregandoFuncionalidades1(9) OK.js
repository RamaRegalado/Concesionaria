/*Agregando funcionalidades
Muy contento el equipo por cómo viene el desarrollo, por la tarde, 
María te comenta que se agrega una funcionalidad muy importante: 
la de verificar si una persona puede comprar o no un auto. 
Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra.
 Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
 Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota,
  va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y
 una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

Ambas condiciones deben cumplirse a la vez: una persona debe de poder pagar cada cuota y el total del auto.
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
        },
        totalDeVentas: function(){
            let listaDeVentas = this.listaDeVentas();

            if(listaDeVentas > 0){
                let totalVentas = listaDeVentas.reduce(function(acum, num){
                    return acum + num;
                })
                return totalVentas;
            } else{
                return 0;
            }
            },
            /*
            modelo: "Corolla",
            precio: 100000,
            km: 0,
            color: "Blanco",
            cuotas: 14,
            modelo: " Fiesta",
            precio: 150000,
    km: 200,
    color: "Azul",
    cuotas:  12*/
    puedeComprar: function(auto, cliente){
        return (cliente.capacidadDePagoTotal >= auto.precio) && (cliente.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas));
    }  
}

let cliente = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

console.log(concesionaria.puedeComprar(concesionaria.autos[0], cliente ))