let button = document.querySelector('#btn'); // Seleccionamos el elemento botón con identificador "btn"

let parrafo = document.querySelector('#resultado'); // Seleccionamos el elemento párrafo con identificador "resultado"

let cambio = false; // Declaramos un boolean a false

button.addEventListener('click', function () {
	// Añadimos el evento clic al botón con una función anónima (sin nombre)
	if (cambio == false) {
		// Comprueba si la variable booleana es false
		cambio = true; // Si es false, la cambia a true
	} else {
		cambio = false; // Si es true, la cambia a false
	}
	parrafo.innerHTML = 'La variable esta en ' + cambio; // Sobrescribe el contenido del párrafo con el texto concatenando el booleano
});
