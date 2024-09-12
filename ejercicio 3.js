// Array con los precios de 40 productos
const precios = [
    100, 150, 200, 80, 60, 220, 350, 400, 50, 30, 75, 120, 90, 300, 450, 110, 210,
    180, 170, 140, 250, 320, 280, 360, 95, 85, 230, 40, 60, 310, 275, 190, 65, 115,
    135, 290, 340, 240, 55, 25
];

// Aplicar el descuento del 10% y calcular el total con reduce()
const totalConDescuento = precios.reduce((total, precio) => {
    const precioConDescuento = precio * 0.9;  // Aplicar el 10% de descuento
    return total + precioConDescuento;
}, 0); // El segundo parámetro (0) es el valor inicial de la reducción

// Imprimir el total con descuento
console.log("Total con descuento: $" + totalConDescuento.toFixed(2));
