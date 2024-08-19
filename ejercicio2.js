
let nombreEstudiante = prompt("Ingrese nombre del estudiante")
let carnet = prompt("Ingrese el carnet del alumno")


//Declaring variables & validating the input
do {
    var notaExamen = prompt("Ingrese la nota del examen del alumno (del 1 al 10)")}
while ((notaExamen > 10) || (notaExamen < 0))

do {
    var notaTareas = prompt("Ingrese la nota de las tareas del alumno (del 1 al 10)")}
while (notaTareas > 10 || notaTareas < 0)

do { 
    var notaAsistencias = prompt("Ingrese la nota de asistencias del alumno (del 1 al 10)") }
while (notaAsistencias > 10 || notaAsistencias < 0)

do { 
    var notaInvestigacion = prompt("Ingrese la nota de investigacion del alumno (del 1 al 10)") }
while (notaInvestigacion > 10 || notaInvestigacion < 0)


//Calculating the final grade
function NotaFinal(notaExamen, notaTareas, notaAsistencias, notaInvestigacion) {
    notafinal = ((notaExamen * 0.2) + (notaTareas * 0.4) + (notaAsistencias*0.1) + (notaInvestigacion * 0.3))
    return notafinal
}

let average = NotaFinal(notaExamen, notaTareas, notaAsistencias, notaInvestigacion)
console.log(`Estudiante: ${nombreEstudiante}    Carnet:${carnet}
    Nota final: ${average}`)