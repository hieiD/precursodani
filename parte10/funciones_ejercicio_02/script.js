// Declarar función esMayor pasándole dos parámetros
function esMayor(numero1, numero2) {
	if (numero1 > numero2) {
		return true; // Si entra en el if, va a devolver true y va a salir de la función por el return
	}
	return false;
}

let numeroUsuario = prompt('Dame un numero'); // Pedir al usuario un número
let numeroUsuario2 = prompt('Dame el segundo numero'); // Pedir al usuario el segundo número

let resultado = esMayor(numeroUsuario, numeroUsuario2); // Llamar a la función y almacenar el resultado en una variable

if (resultado == true) {
	// Es lo mismo que -> if (esMayor(numeroUsuario, numeroUsuario2))
	console.log('El primer número es más grande');
} else {
	console.log('El primer número no es más grande');
}

// Ejemplo return
function miFuncion() {
	return false; // Está saliendo aquí, por lo tanto, no va a ejecutar nada de lo que venga después

	if (resultado == true) {
		console.log('El primer número es más grande');
	} else {
		console.log('El primer número no es más grande');
	}
}
