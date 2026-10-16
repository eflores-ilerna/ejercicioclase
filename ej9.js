// Escribe un programa que intercambie los valores de dos variables numéricas sin usar una variable auxiliar.
//  Muestra los valores antes y después del intercambio.


let a = 1;
let b = 3;

console.log(`a: ${a}  b: ${b}`);

[a, b] = [b, a];

console.log(`a: ${a}  b: ${b}`);