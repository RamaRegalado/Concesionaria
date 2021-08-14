const autos = require("./autos");
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
        puedeComprar: function(auto, cliente){
            return (cliente.capacidadDePagoTotal >= auto.precio) && (cliente.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas));
        } ,
        autosQuePuedeComprar: function(cliente){
            let listaDeAutosPosibles = [];
            let autosALaVenta = this.autosParaLaVenta();
            for(i = 0; i < autosALaVenta.length; i++){
                let podriaComprar = this.puedeComprar(autosALaVenta[i], cliente);
              if( (podriaComprar == true)){
                listaDeAutosPosibles.push(autosALaVenta[i]);
                
              }else return listaDeAutosPosibles = "No te alcanza para nada, Alta Pobreza";
            } return listaDeAutosPosibles;
            }
            
            }
    
/*
Modelo de cliente:
    let cliente = {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 1000000
    }
    */