function dividir(numero1, numero2) {
	// Declaras la función
	let division = numero1 / numero2;
	return division;
}

let numeroUno = prompt('Dame un numero para la división'); // Pide un número
let numeroDos = prompt('Dame un segundo numero para dividir'); // Pide segundo número

// Entra al bucle si numeroDos es diferente a 0
while (numeroDos != 0) {
	let resultado = dividir(numeroUno, numeroDos); // Llama a la función y devuelve la división
	alert(resultado); // Hace la alerta con el resultado de la división
	numeroUno = prompt('Dame un numero para la división'); // Pide otra vez el primer número
	numeroDos = prompt('Dame un segundo numero para dividir'); // Pide otra vez el segundo número antes de comprobar la condición del bucle. Si no pides este número, va a ser un bucle infinito.
}
