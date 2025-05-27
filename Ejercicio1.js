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