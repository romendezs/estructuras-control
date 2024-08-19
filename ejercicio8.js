
var numero = prompt('Ingrese un numero')


//Calculating every product for the number
function Tablas(numero){
    for (let i = 1; i < 11; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

Tablas(numero)