function verificarUsuario(usuario) 
{
  return new Promise((resolve, reject) => 
    {
        const exito=true;
        if (usuario === "admin") 
        {
            resolve("Acceso concedido");
        } 
        else 
        {
            reject("Acceso denegado");
        }
   });

}



//Usa .then y .catch para manejar el resultado--------- INSTRUCCIÓN

verificarUsuario("admin")
.then(res => console.log(res)) //Acceso concedido 
.catch(err => console.error(err));

//verificarUsuario("Fernando")

//.then(res => console.log(res))
//.catch(err => console.error(err)); //Acceso denegado 