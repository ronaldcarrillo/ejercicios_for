'use strict'
/*Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número. */
let numero = parseInt(prompt('Ingrese un número entero positivo'));
for (let i=1;i<=numero;i++) {
    if(i % 2 != 0){
        console.log(i);
    }
}
