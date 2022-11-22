/*
Crea una función maxIndex que reciba una arreglo de números y 
retorne el índice donde se encuentra el mayor. 
Si el arreglo está vacío debe retornar -1
*/

function maxIndex(arreglo) {
    let indexMayor = 0, numMayor = 0;
    if (arreglo.length === 0) return -1;
    var maxIndex = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) 
      {
        if (arreglo[i] > numMayor) {
                numMayor = arreglo[i];
            indexMayor = i;
        }
      }  
        return indexMayor;
    }
    console.log(maxIndex([1, 2, 3]));
    console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
    console.log(maxIndex([]));