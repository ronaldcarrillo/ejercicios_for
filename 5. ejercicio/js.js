'use strict'
/*Generar la tabla de multiplicar de un número. */
let tabla = parseInt(prompt('¿Qué tabla desea ver?'));


for (let i=1;i<=10;i++) {
    console.log(`${tabla} X ${i} = ${tabla*i}`);
}
