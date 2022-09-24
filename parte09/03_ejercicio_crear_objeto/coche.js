let coche = {
    color: "rojo",
    marca: "ford",
    modelo: "focus",

    motor: {
        cilindros: "4",
        capacidad: "2.2",       
    },

}    


let motorCilindros = coche.motor.cilindros;
let motorCapacidad = coche.motor.capacidad;

console.log(coche);
console.log(coche.color);
console.log(coche.marca);
console.log(coche.modelo);
console.log(motorCilindros);
console.log(motorCapacidad);

