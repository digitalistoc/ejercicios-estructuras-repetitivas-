//Escribe aquí tú código
function btn9() {
 	var suma=0;
 	var puntaje=21;
 	for(n=1;n<=40;n++){
 		nota = Number(prompt("Ingresa la nota: "));
 		suma= suma+nota;
 		if (puntaje>nota){
 			puntaje=nota;
 		}
 	}
 	var promedio=suma/40;
 	document.write("<br>" + "El promedio de las notas es: " + promedio);
 	document.write("<br>" + "La menor nota es: " + puntaje);
 } 