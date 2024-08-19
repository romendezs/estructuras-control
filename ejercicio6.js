
do{
    seleccionTuristica =prompt('Seleccione el numero de un lugar turistico: 1-Ciudad de Palma, 2- La costa del Sol, 3- Panchimalco, 4-Puerto el Triunfo')
}while(!(seleccionTuristica=="1") && !(seleccionTuristica=="2") && !(seleccionTuristica=="3") && !(seleccionTuristica=="4"))

calcularDescuento = (seleccionTuristica)=>{
    var descuento
    
    switch(seleccionTuristica){
        case "1":
            descuento = 5
            break
        case "2":
            descuento = 5
            break
        case "3":
            descuento = 10
            break
        case "4":
            descuento = 15
            break
    }

    return descuento
}

descuento = calcularDescuento(seleccionTuristica)

console.log(`El descuento es de ${descuento}%`)