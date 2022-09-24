let pregunta = parseInt(prompt('Dame una numero por favor')); // Con la función parseInt() convertimos el string en número
// Obtenemos el número del usuario y asignamos a la variable "pregunta"

let parrafo = document.querySelector('#resultado'); // Seleccionamos el elemento párrafo del html con identificador "resultado"

parrafo.innerHTML = pregunta; // Asignamos el número obtenido por el usuario al interior del html del párrafo

let button = document.querySelector('#btn'); // Obtenemos el elemento botón con identificador "btn"

button.addEventListener('click', function () {
	// Añadimos un evento clic al botón con una función anónima (no tiene nombre) que llama a la función addNumber pasándole el valor que nos ha dado el usuario
	addNumber(pregunta);
});

function addNumber(number) {
	// Declaramos la función addNumber con un parámetro de entrada "number". (Este parámetro ya viene convertido a número con parseInt en la línea 1)
	parrafo.innerHTML = parseInt(parrafo.innerHTML) + number; // Sobrescribimos el contenido html interior del párrafo con la suma del número dentro del párrafo (con parseInt) y el parámetro de entrada
}
