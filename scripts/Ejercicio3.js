/*
3.	Los tramos del IVA en un país son los siguientes:

Básico: 10%
Reducido: 5%
Superreducido: 2%
Escribe un programa que pregunte al usuario el importe de una compra y el tipo de IVA aplicado
(básico, reducido, superreducido) y muestre por pantalla el total con IVA incluido. (10p)
*/

let importe = prompt("¿Cuál es el monto de su compra?")
let iva = prompt("¿Cuál es el tipo de IVA de su compra?(básico, reducido, superreducido")
if (iva == "básico"){
    importe = importe*1.1
    console.log("Su importe total es\n" + importe)
}else if (iva == "reducido"){
    importe = importe*1.05
    console.log("Su importe total es\n" + importe)
}else if (iva == "superreducido"){
    importe = importe *1.02
    console.log("Su importe total es\n " + importe)
}else {
    console.log("Por favor ingrese un tipo de IVA válido")
}

