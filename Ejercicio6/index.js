var pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}
console.log(Object.keys(pedro))
var items = Object.keys(pedro)
for (var i = 0; i<items.length; i++) {
    var item = items[i];
    console.log(`${item} : ${pedro[item]}`)

} 

pedro.saluda = function saluda() {
    console.log("Hola, me llamo " + this.nombre);
  }

pedro.saluda();

/*
pedro.estatura = 1.8; 
delete pedro.activo;
*/
/*
console.log(pedro.edad)
console.log(pedro.estatura)
console.log(pedro.activo)
*/