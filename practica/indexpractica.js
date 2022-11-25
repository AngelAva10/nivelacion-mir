var products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
  ];
  
  for (var i=0; i < products.length; i++) {
    var product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
  }

/*
pedro.estatura = 1.8; 
delete pedro.activo;
*/
/*
console.log(pedro.edad)
console.log(pedro.estatura)
console.log(pedro.activo)
*/
function suma(x, y) {
    return x + y;
  }

  console.log(suma(3, 5, 6))

  const edad = suma(2, 4);
console.log(`Nayib tiene ${edad} años`); 