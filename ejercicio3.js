
//Input name
nombreEmpleado = prompt("Ingrese el nombre del empleado")

//Input and validation for salario
do{
    var salario = prompt(`Ingrese el salario del empleado`)
}while(salario < 0)

//Input and validation for category
do{
    var seleccion = prompt(`Seleccione la categoria del empleado: A B C D (en mayusculas)`)
    
}while(!(seleccion == "A") && !(seleccion == "B") && !(seleccion == "C") && !(seleccion == "D"))


//Calculating the Increase
function calcularAumento(seleccion, salario){
    var aumento
    
    switch(seleccion){
        case 'A':
            aumento = salario * 0.15
            break
        case 'B':
            aumento = salario * 0.3
            break
        case 'C':
            aumento = salario * 0.1
            break
        case 'D':
            aumento = salario * 0.2
            break
        
    }
    return aumento
}

let aumento = calcularAumento(seleccion, salario)

console.log(`Empleado: ${nombreEmpleado}    Categoria: ${seleccion}
Salario sin aumento: ${salario}
Aumento: ${aumento}`)