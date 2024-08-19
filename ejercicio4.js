let primerNumero = prompt('Ingrese el primer numero')
let segundoNumero = prompt('Ingrese el segundo numero')

calcularMayor = (primerNumero, segundoNumero)=>{
    var mayor
    
    if(primerNumero == segundoNumero){
        mayor = "son iguales"
    }else{
        mayor = (primerNumero > segundoNumero)? primerNumero: segundoNumero
    }

    return mayor
}


mayor = calcularMayor(primerNumero, segundoNumero)
console.log(`El mayor numero es ${mayor} `)