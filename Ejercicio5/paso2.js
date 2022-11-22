/*
Crea una función max que reciba un arreglo de números y retorne el número 
máximo SIN USAR el método Math.max de JavaScript. Si el arreglo está vacío 
debe retornar undefined
*/

function max(arreglo) {
    var max = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) 
    { 
        if (arreglo[i] > max) max = arreglo[i];
    };
    return max;
}
console.log(max([1, 2, 3]));
console.log(max([10, 9, 8 , 7, 6, 5, 4]));
console.log(max([]));