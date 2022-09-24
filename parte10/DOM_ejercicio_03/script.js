let div = document.querySelector('#carta'); // Seleccionamos el elemento div con identificador "carta"

let imagen = 'reverso.png'; // Asignamos el nombre de la imagen que será el atributo src (es la misma que está en el html)

div.addEventListener('click', function () {
	// Añadimos un evento clic a la división
	if (imagen == 'reverso.png') {
		// Si el string de la imagen es "reverso.png", se cambia a "anverso.jpg" y vicebersa
		imagen = 'anverso.jpg';
	} else {
		imagen = 'reverso.png';
	}
	// Se sobrescribe el contenido del div con el elemento <img> y su atributo src mediante una variable de esta forma -> ${imagen}
	div.innerHTML = `
    <img src="${imagen}"/>
    `;
});
