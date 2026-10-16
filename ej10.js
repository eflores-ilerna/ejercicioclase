// Escribe un programa que determine si un número dado es primo.
//  Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//  Muestra el resultado por pantalla.

let numero = prompt("Dame un número");

let primo = true;

if(numero <= 0){
    document.write(`${numero} es negativo o cero. Introduce un número positivo`);
}
else if(numero == 1){
    document.write(`${numero} es 1`);
}
else{
    for(let i=2;i < numero;i++){
        if(numero%i==0){
            primo = false;
            break;
        }
    };
    if(primo){
        document.write(`${numero} es primo`);
    }else{
        document.write(`${numero} no es primo`);
    }
}




