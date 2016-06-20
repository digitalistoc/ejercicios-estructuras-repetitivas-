//Escribe aquí tú código
var sumaDos = 0;
var b = 0;
 function btn2() {
  do {
 	numero = Number(prompt("Porfavor ingresa tu número " + (b+1)));
 		sumaDos = sumaDos + numero; // Se almacena la sumaDos
 		b++;
 	} while(b < 10);
 	document.getElementById("ej2").innerHTML = "La suma de tus números es " + sumaDos;
 }