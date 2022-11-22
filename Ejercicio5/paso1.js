/*
Crea una función sum que reciba 
un arreglo de números y retorne la 
suma de todos los elementos:
*/

let numeros = [1,2,3];
function suma(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };
    return sum;
}
console.log(suma(numeros));
console.log(suma([10,8,12,5]));
console.log(suma([]));
