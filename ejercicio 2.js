// Array de 50 números
const numeros = [
    5, 12, 8, 130, 44, 9, 33, 50, 63, 72, 29, 87, 14, 24, 35, 68, 91, 120, 45, 60,
    13, 28, 19, 31, 46, 89, 97, 150, 83, 22, 10, 6, 18, 66, 81, 52, 101, 88, 73, 40,
    17, 30, 74, 96, 21, 55, 61, 32, 38, 90
];

// Filtrar los números pares
const pares = numeros.filter(numero => numero % 2 === 0);

// Duplicar los números filtrados
const duplicados = pares.map(numero => numero * 2);

// Imprimir el nuevo array de números duplicados
console.log(duplicados);

