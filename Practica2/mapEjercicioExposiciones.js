const productos = 
[
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}

];

const nombreProductos = productos
.filter(p=> p.precio > 1000) //Esto sirve para filtrar a los que valen más de 1000
.map(p => p.nombre);  //De esos, saca solo el nombre
console.log(nombreProductos);