'use strict'
function multiplicar(multiplicador, multiplicando){
    let suma = 0;
    for(let i = 0; i < multiplicador; i++){
        suma = suma + multiplicando;       
    }
    return suma;
}
let primerNumero = Number(prompt("Ingrese el numero multiplicador"));
let segundoNumero = Number(prompt("Ingrese el numero multiplicando"));
let resultado = multiplicar(primerNumero, segundoNumero);    
alert(resultado);
