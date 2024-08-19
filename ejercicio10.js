var promedios = [0, 0, 0]


//Asking for inputs
for (let i = 0; i < 5; i++) {
    promedios[0] += Number(prompt(`Ingrese la edad del estudiante ${i + 1} del turno de la mañana`));
}

for (let i = 0; i < 6; i++) {
    promedios[1] += Number(prompt(`Ingrese la edad del estudiante ${i + 1} del turno de la tarde`));
}

for (let i = 0; i < 11; i++) {
    promedios[2] += Number(prompt(`Ingrese la edad del estudiante ${i + 1} del turno de la noche`));
}


//Calculating averages
function Averages(promedios){
    let average = [0,0,0]
    for (let i = 0; i < promedios.length; i++) {
        switch (i) {
            case 0:
                average[0] = promedios[0] / 5
                console.log
                break
            case 1:
                average[1] = promedios[1] / 6
                break
            case 2:
                average[2] = promedios[2] / 11
                break
        }
    }
    return average
}
promedios = Averages(promedios)



//Choosing the highest
var highestAverage = 0
promedios.forEach(average => {
    if (average > highestAverage) {
        highestAverage = promedios.indexOf(average);
    }
})

switch(highestAverage){
    case "0":
        highestAverage = "mañana"
        break
    case "1":
        highestAverage = "tarde"
        break
    case "2":
        highestAverage = "noche"
        break
}


console.log(`Promedio del turno de la mañana: ${promedios[0]} años
Promedio del turno de la mañana: ${promedios[1]} años
Promedio del turno de la mañana: ${promedios[2]} años`)

window.alert(String(`El turno de la ${highestAverage} es el de mayor promedio de edad`))