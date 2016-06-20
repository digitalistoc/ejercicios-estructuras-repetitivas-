//Escribe aquí tú código

var sumaUno = 0;
var i = 0;
 function btn1() {
 	while(i < 10) {
 		numero = Number(prompt("Porfavor ingresa tu número " + (i+1)));
 		sumaUno = sumaUno + numero; 
 		i++;
 	}
 	document.getElementById("ej1").innerHTML = "La suma de tus números es " + sumaUno;
 } 