var costoProducto = 50
var descuentoProducto = 0.2
const ISV = 0.15
var otros = 10

var total = 
    costoProducto - (costoProducto*descuentoProducto) + (costoProducto*ISV) + otros

console.log("El total a pagar es:" + total)

var totalDisponible = 100;

function ObtenerDisponibleInventario(cantRequerida) {
    let cantidadAEntregar
    console.log(`Cantidad inicial: ` + totalDisponible)
    if(totalDisponible>=cantRequerida){
        cantidadAEntregar = cantRequerida
        totalDisponible -= cantRequerida
    }else{
        cantidadAEntregar=totalDisponible
        totalDisponible=0
    }
    console.log(`Cantidad a entregar: ${cantidadAEntregar}`)
    console.log(`Pedido pendiente a bodega ${ cantRequerida-cantidadAEntregar}`)

}

ObtenerDisponibleInventario(120)
console.log(totalDisponible)

//Estructura de decision ternaria
let decision = (5>4)?1:0
console.log(decision)

//Funcion de tipo flecha
(cantRequerida) => {
    console.log("Hola")
}