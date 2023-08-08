function descripcionArreglo(x) {
    if (x.length <= 5) {
        return "Es un arreglo chico"
    } else {
        return "Es un arreglo grande"
    }
}

console.log(descripcionArreglo([1, 2, 3, 4,]))
console.log(descripcionArreglo([1, 2, 3, 4, 5, 6]))