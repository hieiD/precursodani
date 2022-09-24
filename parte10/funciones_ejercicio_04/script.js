// Declarar función con 2 parámetros:
// Primer parámetro - Tipo de moneda: "libras", "dolares", "yenes"
// Segundo parámetro - Cantidad en número de euros
// En la función tienes que comprobar qué tipo de moneda te viene como parámetro
// Si el tipo de "libras", multiplicas la cantidad de euros * 0.86
// Si el tipo de "dolares", multiplicas la cantidad de euros * 1.28611
// Si el tipo de "yenes", multiplicas la cantidad de euros * 129.852
//El resultado multiplicado previamente lo muestras por console.log (NO DEVUELVE NINGUN VALOR)

// Llamar a la función con los valores que te de la gana

function conversion(tipoDeMoneda, cantidadNumeroDeEuros) {
	let resultado; //las variables declaradas dentro de la funcion no son accesibles fuera de la funcion//

	if (tipoDeMoneda == 'libra') {
		resultado = cantidadNumeroDeEuros * 0.86;
	} else if (tipoDeMoneda == 'dolares') {
		resultado = cantidadNumeroDeEuros * 1.28611;
	} else if (tipoDeMoneda == 'yenes') {
		resultado = cantidadNumeroDeEuros * 129.852;
	}
	console.log(resultado);
}

conversion('libra', 5);
