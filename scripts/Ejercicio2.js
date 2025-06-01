/*
2.	Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y tus ingresos mensuales deben estar entre 500€ y 2000€.
Escribe un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario es 
elegible para el subsidio o no. (10p)
*/

let nota = parseFloat(prompt("Ingrese su nota (0-20):"));
let asistencia = parseFloat(prompt("Ingrese su porcentaje de asistencia (0-100):"));

if (nota >= 11 && asistencia >= 70) {
    if (nota > 17 && asistencia === 100) {
        console.log("¡Aprobado con mención especial por excelente nota y asistencia completa!");
    } else {
        console.log("Aprobado");
    }
} else {
    console.log("Desaprobado");
}