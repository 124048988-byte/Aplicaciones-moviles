var nombredelusuario = "Jhon"
let lastname = "Martinez"

console.log(nombredelusuario);
console.log(lastname);
//--------

const PI = 3.1416;
console.log(PI)
//--------

let numeroUno = 10;
let numeroDos = 5;

let result = numeroUno + numeroDos;
console.log(result);
//---------

let name1 = 'Fernando';
let lastname2 = 'Martinez';
let completeName = name1 + ' ' + lastname;

console.log(completeName);

//--------
let numeroUno1 = 10;
let numeroDos2 = 5;

let result2 = numeroUno < numeroDos;
console.log(result2);

//-----------

let passwordBD = 'Pepe123'
let input = 'Pepe123'

let result3 = input == passwordBD
console.log(result3)

if(result3 === true)
{
    console.log("Login correcto");
}
else
{
    console.log("Login incorrecto");
}

//--------------
let score = 70
if(score > 30)
{
    console.log("Necesitas practIcar más");
}

else if(score > 15)
{
    console.log("Estás mejorando");
}

else 
{
    console.log("Necesitas seguir este tutorial");
}

//--------
let cardType = 'Debid card'
switch(cardType)
{
    case 'debid cad':
    console.log("Esto es una tarjeta de credito");
        break;
    case 'credit card': 
    console.log("Esta es una tarjketa de credito");
        break;
}
//------
let count = 50;
while(count > 0)
{
    console.log("Hola, mundo");
    count = count - 1; //Eso es lo mismo que decir: count--
}

//-------
let names = ['Mario', 'Luis', 'fernando', 'Nery'];
comnsole.log(names[3])

//--------

let names2 = ['Mario', 'Luis', 'fernando', 'Nery'];
for(let i=0; i< names.length; i++)
{
    console.log(names[i]);
}
//------
let names3 = ['Mario', 'Luis', 'fernando', 'Nery'];
for(let i=names.length-1;  i>0; i--)
{
    console.log(names[i]);
}

//-------
function saludar()
{
    console.log("Hola");

    saludar();
}

//--------
function greetings(name)
{
    console.log(name)
    console.log('Hola, Fer');
}

greetings();

