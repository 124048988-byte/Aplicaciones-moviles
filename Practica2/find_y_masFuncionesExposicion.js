const personas =
[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

const found = personas.find(element => element.nombre === "Luis");
console.log("Función Find: " +found);


personas.forEach(f => console.log(f.nombre,f.edad));


let suma = personas.reduce((acc,val) => acc +val.edad, 0)
console.log(" ");
console.log("La suma de todas las edades es: " +suma);