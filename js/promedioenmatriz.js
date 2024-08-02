//Array nombres
let nombres = ["Rómulo", "Pedro", "Alvaro", "David"];

//Matriz de Notas
let notas = [
    [18,20,18],
[15,15,10],
[15,7,12],
[15,10,18],
];

function calcularPromedio(notas) {
let promedios =[]
for (let i=0;i<notas.length; i++) {
let fila = notas [i];
let suma = fila.reduce((total,notas)=> total + notas,0);
promedios[i] = suma/fila.length;
}
return promedios;
}

function evaluacion (nombres,promedios){
for (let i=0; i<promedios.length;i++){

    if (promedios[i]>=15) {
        console.log ("El Alummno "+ nombres[i]+ " Aprobo El promedio es "+ promedios[i]);
    }
        else {
        console.log ("El Alummno "+ nombres[i]+ "  no Aprobo. El promedio es "+ promedios[i]);
    }
}
}

let promedios = calcularPromedio(notas);
evaluacion (nombres,promedios);