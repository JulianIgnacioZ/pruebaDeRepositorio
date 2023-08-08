//9
function descripcionArreglo(x) {
    if (x.length <= 5) {
        return "Es un arreglo chico";
    } else {
        return "Es un arreglo grande";
    }
}

console.log(descripcionArreglo([1, 2, 3, 4,]));
console.log(descripcionArreglo([1, 2, 3, 4, 5, 6]));
//10
const arrayNombres = ["Julian"];
function arregloNombres(arrayNombres, nombreBusqueda) {
    if (arrayNombres.includes(nombreBusqueda)) {
        return nombreBusqueda + " se enceuntra en el grupo";
    } else {
        return nombreBusqueda + " no se encuentra en el grupo";
    }
}
console.log(arregloNombres(arrayNombres, "Julian"))

//11


function elementosMayOIgA10(array) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

let arrayNumeros = [0, 17, 9, 15, 10, 3, 43];
let arregloFinal = elementosMayOIgA10(arrayNumeros);
console.log(arregloFinal);

