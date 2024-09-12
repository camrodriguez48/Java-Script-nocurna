// Matriz 4x4 con números aleatorios
const matriz = [
    [3, 7, 1, 9],
    [2, 5, 12, 8],
    [6, 14, 0, 4],
    [11, 16, 13, 10]
];

// Nueva matriz para almacenar los valores incrementados
const nuevaMatriz = [];

// Recorrer cada fila de la matriz
for (const fila of matriz) {
    // Crear una nueva fila incrementada
    const nuevaFila = [];

    // Recorrer cada elemento de la fila
    for (const elemento of fila) {
        nuevaFila.push(elemento + 5); // Incrementar el valor en 5
    }

    // Añadir la nueva fila a la nueva matriz
    nuevaMatriz.push(nuevaFila);
}

// Imprimir la nueva matriz
console.log("Matriz original:", matriz);
console.log("Matriz incrementada en 5:", nuevaMatriz);
