/*Escribe un programa que solicite el nombre de una persona y luego muestre por pantalla un saludo personalizado.*/


const readline= require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cómo te llamas?", name => {console.log(`Hola ${name}!`)})

/*
let name = prompt("¿Cómo te llamas?");
console.log(`Hola ${name}!`);
*/