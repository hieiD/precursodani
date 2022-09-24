let fechadeNacimiento = prompt("fecha de nacimiento")
let nombre =prompt("Dime tu nombre")
let apellido =prompt("Dime tu apellido")

var letra1 = nombre.charAt(0)
var letra2 = apellido.charAt(apellido.length -1)
var letra3 = fechadeNacimiento.charAt(fechadeNacimiento.length -1)


//console.log(letraNombre[letra1].masculino + ' ' +  letraApellido[letra2].masculino + ' ' + fechaNacimiento[letra3].masculino)//

let superheroe = letraNombre[letra1].masculino + ' ' +  letraApellido[letra2].masculino + ' ' + fechaNacimiento[letra3].masculino;
console.log(superheroe)

