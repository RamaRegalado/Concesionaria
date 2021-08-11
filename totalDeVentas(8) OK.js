/*Total de ventas
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, 
que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. 
Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!

Recordá que si la lista esta vacía, el reduce falla en la ejecución. ¿Por qué puede pasar esto?
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
            }
        }


console.log(concesionaria.totalDeVentas())