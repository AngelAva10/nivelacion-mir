/*
La función calcularColor recibe un número como 
argumento y retorna un string de acuerdo al 
número:
1. Si el número es 1 retorna "El color es negro".
1. Si el número es 2 retorna "El color es 
blanco".Si el número es 3 retorna "El color es 
azul".
2. De lo contrario retorna "El color es verde".
 
Corrige el ejercicio para que funcione 
*/

function calcularColor(numero) {
    if (numero === 1) {
        return "El color es negro"
    } else if (numero === 2) {
        return "El color es blanco"; 
    } else if (numero === 3) {
    return "El color es azul";
    } else return "El color es verde";
}

console.log(calcularColor(1));