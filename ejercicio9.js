
var temperatura = prompt('Ingrese temperatura en Farenheit')

function interpretarTemperatura(temperatura){

    if(temperatura>=14 && temperatura< 32){
        console.log('Temperatura baja')
    } else if(temperatura>=32 && temperatura<68){
        console.log('Temperatura adecuada')
    } else if(temperatura>=68 && temperatura<96){
        console.log('Temperatura alta')
    } else{
        console.log('Temperatura desconocida')
    }
}

interpretarTemperatura(temperatura)