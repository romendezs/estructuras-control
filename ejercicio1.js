
let edad = prompt("Ingrese su edad")

function mayoriaEdad(edad){
    mensaje = (edad>=18)? "es mayor de edad" : "es menor de edad"
    console.log(mensaje)
    return mensaje
}

mayoriaEdad(edad)