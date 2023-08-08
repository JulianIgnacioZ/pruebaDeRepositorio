function descripcionArreglo(x) {
    if (x.length <= 5) {
        return "Es un arreglo chico";
    } else {
        return "Es un arreglo grande";
    }
}

console.log(descripcionArreglo([1, 2, 3, 4,]));
console.log(descripcionArreglo([1, 2, 3, 4, 5, 6]));

const array1 = ["Julian"];
function arregloNombres(array1) {
    if (array1) {
        return "Julian se enceuntra en el grupo";
    } else {
        return "Julian no se encuentra en el grupo";
    }
}