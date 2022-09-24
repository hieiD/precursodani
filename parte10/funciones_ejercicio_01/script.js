// Declarar la función "mostrar"
function mostrar(numero) {
	for (var i = 0; i < numero; i++) {
		console.log('hola');
	}
}

// Llamar a la función pasándole el parámetro "numero" con valor 3
mostrar(3);
// Llamar a la función pasándole el parámetro "numero" con valor 5
mostrar(5);

//*********EJEMPLOS***************//

// Ejemplo de función sin parámetros:
function miFuncion1() {
	console.log('Ven a mi casa');
}

// Llamar a la función pasándole ningún parámetro
miFuncion1(); // Ven a mi casa

/************************************ */

// Ejemplo de función con parámetros:
function miFuncion2(parametro) {
	console.log('Muestro mi parámetro ' + parametro);
}

// Llamar a la función pasándole ningún parámetro
miFuncion2('Daniel'); // Muestro mi parámetro Daniel

/************************************ */

// Ejemplo de función que devuelve un valor
function miFuncion3(parametro) {
	return parametro / 5;
}

// Llamar a la función pasándole ningún parámetro
console.log(miFuncion3(10)); // 2
