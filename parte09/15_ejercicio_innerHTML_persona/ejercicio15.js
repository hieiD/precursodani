let respuesta = prompt(
	'Dime el nombre de la persona que quieres saber sus datos'
); // aqui te están dando el nombre completo. Ejemplo: Bridgette McGuire

// personas['daniel caballero'] -> null
// personas['Bridgette McGuire'] -> devuelve un objeto que ya existe
if (personas[respuesta]) {
	// Comprobar que el nombre completo existe en el objeto. "respuesta" es la clave del objeto
	// Ejemplo: personas['Bridgette McGuire']

	let body = document.querySelector('body'); // Seleccionar body
	body.innerHTML = `<div id="main" style="background-color:${personas[respuesta].eyeColor}"></div>`; // Añadiendo contenido al body
	// Para añadir variables se usa ${}

	let div = document.querySelector('#main'); // Seleccionar el div con identificador "main"

	div.innerHTML = `
    <img src="${personas[respuesta].picture}"/>
    <h1>${respuesta}</h1>
    <p>${personas[respuesta].age}</p>
    <p>${personas[respuesta].email}</p>
    <p>${personas[respuesta].address}</p>    
`; //aqui debe ir la variable del nombre completo. Las variables se ponen entre ${}
} else {
	console.log('esa persona no esta en la base de datos');
}
