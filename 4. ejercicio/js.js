'use strict'
/*Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión. */
let cantidad = parseInt(prompt('Ingrese la cantidad a invertir'));
let interes = parseFloat(prompt('Ingrese el interés anual'));
let anio = parseInt(prompt('Ingrese el número de años'));
if(interes % 1 == 0){
    interes = interes / 100;
}
for (let i=1;i<=anio;i++) {
    let inversion = cantidad + (cantidad * interes)
    console.log('Año ',i, ' ',inversion);
    cantidad = inversion;
}
