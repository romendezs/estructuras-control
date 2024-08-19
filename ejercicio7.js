

var numerosIngresados = []
for (let i = 0; i < 9; i++) {
    numerosIngresados.push(prompt('Ingrese un numero'))
}

//Acumulador
function Acumulador(numerosIngresados){
    
    // [negatives, positives, fifteen, even]
    var numbers = [0,0,0,0]
    numerosIngresados.forEach(numero => {
        //Negatives
    if(numero<0){
        numbers[0] += 1
    }

    //Positives
    if(numero>0){
        numbers[1]+= 1
    }

    //15
    if(numero%15){
        numbers[2]+= 1
    }

    //Even
    if(numero%2){
        numbers[3]+= 1
    }
    });

    return numbers
}

numbers= Acumulador(numerosIngresados)

console.log(`Numeros Negativos: ${numbers[0]}
Numeros Positivos: ${numbers[1]}
Numeros multiplos de 15: ${numbers[2]}
Numeros pares: ${numbers[3]}`)
