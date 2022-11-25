let receta = {}
// nombre receta
receta.nombre= "Sandwich"

// nombre ingredientes
receta.ingredientes= []

receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2,

})
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
})

console.log(receta.ingredientes[0].nombre)

//suma de cantidad de ingredientes
let sum = 0;
    for (let i = 0; i < receta.ingredientes.length; i++) {
        sum += receta.ingredientes[i].cantidad;
    }
console.log(sum)