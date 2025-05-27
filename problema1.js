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