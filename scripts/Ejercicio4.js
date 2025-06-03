/*
4.	Escribe un programa que pregunte al usuario el total de su compra
 y si tiene un código de descuento. Si el código es "DESCUENTO10", 
 se aplicará un 10% de descuento. Si el código es "DESCUENTO20", 
 se aplicará un 20% de descuento. 
 Muestra el total después de aplicar el descuento, si corresponde,
  y un mensaje si el código no es válido. (10p)
  */

let total = parseFloat(prompt("¿Cuál es el total de su compra? "));
if(isNaN(total) || total < 0){
  console.log("Por favor ingrese un número válido")
}else{
  let descuento = prompt("¿Tiene un código de descuento? ");
if (descuento.toUpperCase()==="DESCUENTO10"){
  total = total *.9;
  console.log(`Su total con un 10% de descuento es: $ ${total.toFixed(2)}`);
}else if (descuento.toUpperCase()==="DESCUENTO20"){
  total = total *.8;
  console.log(`Su total con un 20% de descuento es $ ${total.toFixed(2)}`);
}else{
  console.log(`El código de descuento no es válido, su total es $ ${total.toFixed(2)}`);
}
}
