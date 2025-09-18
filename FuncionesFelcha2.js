const saludoPersonalizado = (nombre, edad) => 
{
    const saludo = "Hola, " + nombre + ". Tengo " + edad + " años.";
    return saludo;
}

console.log(saludoPersonalizado("Luis", 19));
