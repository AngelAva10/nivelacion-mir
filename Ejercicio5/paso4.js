/*
Crear una función join que reciba un 
arreglo y retorne un string con todos los 
elementos separados por espacio SIN 
USAR el método join de los arreglos
*/

function join(arreglo) {
  let resultado = "";
  for (let i = 0; i < arreglo.length; i++) {
    resultado += arreglo[i];
    if (arreglo.length - 1 !== i) resultado+=" "
  }
  return resultado;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));