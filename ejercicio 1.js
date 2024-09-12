const estudiantes = [
    { nombre: "Juan", nota: 85 },
    { nombre: "Ana", nota: 45 },
    { nombre: "Luis", nota: 70 },
    { nombre: "Marta", nota: 90 },
    { nombre: "Carlos", nota: 55 },
    { nombre: "Pedro", nota: 60 },
    { nombre: "Sof�a", nota: 75 },
    { nombre: "Luc�a", nota: 50 },
    { nombre: "Andr�s", nota: 80 },
    { nombre: "Patricia", nota: 95 },
    { nombre: "Tom�s", nota: 35 },
    { nombre: "Gabriela", nota: 88 },
    { nombre: "Felipe", nota: 77 },
    { nombre: "Isabel", nota: 92 },
    { nombre: "Ra�l", nota: 40 },
    { nombre: "Diana", nota: 63 },
    { nombre: "Ricardo", nota: 58 },
    { nombre: "Fernando", nota: 67 },
    { nombre: "Victoria", nota: 72 },
    { nombre: "Mar�a", nota: 83 }
];

// Filtrar estudiantes aprobados (nota >= 60) y extraer sus nombres
const nombresAprobados = estudiantes
    .filter(estudiante => estudiante.nota >= 60)
    .map(estudiante => estudiante.nombre);

console.log(nombresAprobados);