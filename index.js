const nombre = "Julian";
const saludo = "Hola" + " " + nombre;
console.log(saludo);

function saludarPorPantalla(saludo, nombre) {
    return console.log(saludo)
}

saludarPorPantalla(saludo, nombre)

function mayoriaDeEdad(edad) {
    if (edad >= 18) {
        console.log("Sos mayor de edad");
    }
    else {
        console.log("Sos menor de edad");
    }
}

mayoriaDeEdad(18)
mayoriaDeEdad(17)

function saludoEdad(nombre, edad) {
    if (edad >= 18) {
        console.log(saludo + ", sos mayor de edad");
    }
    else {
        console.log(saludo + ", sos menor de edad");
    }
}
saludoEdad(nombre, 26)
saludoEdad(nombre, 16)

function sumarPares(n) {
    if (n < 16) {
        for (let i = n; i <= 16; i += 2) {
            console.log(i)
        }
    }
}
sumarPares(4)
//6
function imprimirNumerosPares(n) {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}

imprimirNumerosPares(28);

//7

function obtenerPrimerosNumerosPares(n) {
    const numerosPares = [];

    for (let i = 2; numerosPares.length < n; i += 2) {
        numerosPares.push(i);
    }

    return numerosPares;
}

const primerosPares = obtenerPrimerosNumerosPares(3);
console.log(primerosPares);

//8
const parametros = require('./parametros.js')

//9
