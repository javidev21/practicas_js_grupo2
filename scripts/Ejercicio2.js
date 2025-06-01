/*
2.	Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y tus ingresos mensuales deben estar entre 500€ y 2000€.
Escribe un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario es 
elegible para el subsidio o no. (10p)
*/

// Solicitar datos al usuario
let edad = parseInt(prompt("¿Cuál es tu edad?"));
let ingresos = parseFloat(prompt("¿Cuáles son tus ingresos mensuales en euros?"));

// Verificar la elegibilidad para el subsidio
if (edad >= 18 && ingresos >= 500 && ingresos <= 2000) {
    console.log("Eres elegible para el subsidio.");
} else {
    console.log("No eres elegible para el subsidio.");
}
