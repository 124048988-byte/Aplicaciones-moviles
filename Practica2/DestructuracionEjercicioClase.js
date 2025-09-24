const persona = 
{
    nombre: "Ivan",
    edad: 33,
    direccion: 
    {
        ciudad: "Queretaro",
        pais: "Mexico"
    }
};


const { nombre, edad, direccion} = persona;
console.log("Hola, me llamo " +nombre, ", tengo " +edad, "años. Vivo en " +direccion.ciudad);



//Esta es otra forma de mostrarlo ---->  const { nombre, edad, direccion:{ciudad}} = persona;
                                        //console.log(nombre,edad, ciudad);
