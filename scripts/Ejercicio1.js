/*1.	Cálculo de Índice de Masa Corporal (IMC):
Escribe un programa que pregunte al usuario su peso en kilogramos y su altura en metros.
Calcula el Índice de Masa Corporal (IMC) usando la fórmula IMC = peso / (altura * altura)
 y muestra la categoría correspondiente según el IMC (bajo peso, normal, sobrepeso, obesidad). (10 p)
*/

let peso=parseFloat(prompt("Ingrese su peso:"))
let talla=parseFloat(prompt("Ingrese su talla(en metros):"))
let imc=peso/(talla*talla)
if (imc<18.5){
    console.log("Bajo peso")
} else if (imc>=18.5 && imc<=24.9){
    console.log("Normal")
} else if (imc>=25 && imc<=29.9){
    console.log("Sobrepeso")
} else{
    console.log("Obesidad")
}