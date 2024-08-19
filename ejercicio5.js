
//Selecting the car
do{
    var coche = prompt('Seleccione del 1-3 el coche a la venta (1- FORD FIESTA, 2-FORD FOCUS, 3-FORD ESCAPE)')
}while(!(coche==1) && !(coche==2) && !(coche==3) )

//Price input
var precioCoche = prompt(`Ingrese el precio del coche`)


//Calculating the discount
calcularDescuento = (coche, precioCoche)=>{
    var descuento = [0, ""]
    
    switch(coche){
        case "1":
            descuento[0] = precioCoche*0.05
            descuento[1] = "FORD FIESTA"
            break
        case "2":
            descuento[0] = precioCoche*0.10
            descuento[1] = "FORD FOCUS"
            break
        case "3":
            descuento[0] = precioCoche*0.20
            descuento[1] = "FORD ESCAPE"
            break
    }

    return descuento
}

var descuento = calcularDescuento(coche, precioCoche)

console.log(`El descuento para el ${descuento[1]} es de ${descuento[0]}`)



document.getElementById('descuento').innerHTML = String(`El descuento para el ${descuento[1]} es de $${descuento[0]}`)

