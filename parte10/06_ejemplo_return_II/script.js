function calculaPrecioTotal(precio, porcentajeimpuestos) {
  let gastosEnvio = 10;
  let precioConimpuestos = (1 + porcentajeimpuestos / 100) * precio;
  let precioTotal = precioConimpuestos + gastosEnvio;
  return precioTotal;
}

let precioTotal = calculaPrecioTotal(23.34, 16);
let otroPrecioTotal = calculaPrecioTotal(15.2, 4);
