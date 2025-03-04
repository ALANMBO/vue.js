//TEMPLATE  LITERALS

let nombre = "pedro";
function getSaludo(nombre) {
  // Concatenamos la cadena 'hola' con el nombre recibido
  return "hola" + nombre;
}
document.write(`Esto es un saludo : ${getSaludo(nombre)}` + "<br>" + "<hr>");

//OBJECT LITERALS
const persona = {
  nombre: "pedro",
  apellido: "gonzalez",
  edad: 20,
  direccion: {
    ciudad: "medellin",
    zip: 123456,
    lat: 10.123,
    lng: 11.123,
  },
};
document.write(persona.nombre + "<br>");
document.write(persona.apellido + "<br>");
document.write(persona.direccion.ciudad + "<br>");
document.write(persona.direccion.lat + "<br>");
document.write(persona.direccion.lng + "<br>" + "<hr>");
console.log(persona);

//ARRAYS

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arreglo.push(11);

const arreglo2 = [...arreglo]; //METODO SPREAD
arreglo2.push(12);

const arreglo3 = arreglo2.map(function (x) {
  return x * 2;
}); //METODO MAP

document.write(arreglo + "<hr>");
document.write("ARREGLO 2 :", arreglo2 + "<br>" + "<hr>");
document.write(arreglo3 + "<br>" + "<hr>");

//FUNCIONES FLECHAS

const heroes = [
  {
    id: 1,
    name: "Spiderman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

document.write(getHeroeById(1).name + "<br>" + "<hr>");

//DESESTRUCTURACION DE OBJETOS
const person = {
  name: "pedro",
  age: 20,
  codeName: "pedro",
};
const { name, age, codeName, power = "fuerza" } = person;

const createHero = ({ name, age, codeName, power = "fuerza" }) => ({
  id: 12354,
  name,
  age,
  codeName,
  power,
});
console.log(createHero(person));
// DESTRUCTURACION DE ARRAYS

const characters = ["Goku", "Vegeta", "Trunks", "Pikachu"];
const [Goku, Vegeta, Trunks] = characters;
document.write(Goku + "<br>" + Vegeta + "<br>" + Trunks + "<br>" + "<hr>");

const returnArray = ([letters, numbers]) => {
  return [letters, numbers];
};
const [letters, numbers] = returnArray(["hola", 123]);
document.write(letters + "<br>" + numbers + "<br>" + "<hr>");

//IMPORTACION Y EXPORTACIONES
/* 
import { name } from "./data/heroes.js";
document.write(name); */

//PROMESAS
document.write("inicio" + "<br>");
new Promise((resolve, reject) => {
  document.write("CUERPO DE LA PROMESA" + "<br>");
  resolve("promesa resuelta con error");
})
  .then((msg) => document.write(msg))
  .catch((err) => document.write(err));
document.write("fin" + "<br>" + "<hr>");

//Fetch API

const apiKey = "lSGMzxsN2osR671B7lFlgfxIOaREBuW6";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });

/* Ejercicio 1: El Cofre de las Gemas
Imagina que tienes un cofre con tres tipos de gemas: rubíes, zafiros y 
esmeraldas. Cada gema tiene un valor diferente en monedas de oro: los rubíes
valen 10 monedas, los zafiros valen 5 monedas y las esmeraldas valen 2 
monedas. Si tienes 10 gemas en total y el valor total en el cofre es 
de 75 monedas de oro, ¿cuántas gemas de cada tipo tienes? */

var rubies = 10,
  zafiros = 5,
  esmeraldas = 2;

var cantidadRubies = 7,
  cantidadZafiros = 1,
  cantidadEsmeraldas = 2;

var sumaGemas =
  rubies * cantidadRubies +
  zafiros * cantidadZafiros +
  esmeraldas * cantidadEsmeraldas;

document.write("EL VALOR TOTAL ES: " + sumaGemas + "<br>" + "<hr>");

/* Ejercicio 2: La Tienda de Postres
Imagina que estás administrando una tienda 
de postres que vende tres tipos de dulces: 
pasteles, galletas y helados. Cada tipo de 
dulce tiene un precio diferente:

Los pasteles cuestan 20 monedas cada uno.
Las galletas cuestan 5 monedas cada una.
Los helados cuestan 10 monedas cada uno.
En un día, vendiste un total de 50 dulces y 
el ingreso total fue de 500 monedas. 
¿Cuántos pasteles, galletas y helados vendiste? */

var pasteles = 20,
  galletas = 5,
  helados = 10,
  sumaDePostres = 0;
//ingresoTotal = 500
// dulce de pastel = 20 monedas * 10  = 200
// dulces de galletas = 5 monedas * 20 = 100
//dulces de helados  = 10 monedas * 20 = 200

sumaDePostres = pasteles * 10 + galletas * 20 + helados * 20;
document.write(
  "LA SUMA DE LOS POSTRES ES DE :" + sumaDePostres + "<br>" + "<hr>"
);

//ASIGNACIÓN, CONSOLE LOG y TYPEOF en JAVASCRIPT

/*Asignación de Variables Básica:

Asigna el valor 10 a una variable llamada a.
Asigna el valor 20 a una variable llamada b.
Asigna el valor a + b a una variable llamada c. */
var a = 10,
  b = 20,
  c;
c = a + b;
console.log("LA sumatotaldecofre ES : " + typeof c);

/* Asignación de Cadenas de Texto:

Asigna la cadena "Hola" a una variable llamada saludo.
Asigna la cadena "Mundo" a una variable llamada objeto.
Asigna la concatenación de saludo y objeto a una variable llamada mensaje. */
let saludo = " HOLA ";
let objeto = " MUNDO ";
let mensaje = saludo + objeto;
console.log("EL MENSAJE ES :" + typeof mensaje);

/*Asignación de Booleanos:

Asigna el valor true a una variable llamada esVerdadero.
Asigna el valor false a una variable llamada esFalso. */

var esVerdadero = true;
var esFalso = false;

var comida = 2800;
var comida1 = 1300;
let sumatotaldecofredecomida = comida + comida1;
var bebida = 900;
var bebida1 = 650;
let sumatotaldecofredeBebida = bebida + bebida1;

console.log("LA COMIDA ES $:" + sumatotaldecofredecomida);
console.log("LA BEBIDA ES $:" + sumatotaldecofredeBebida);

/* Ejercicio 1: Comparación de Números:
Imagina que tienes dos números enteros, A y B. Escribe un ejercicio que muestre por pantalla
el mensaje "A es mayor que B" si A es mayor que B, y "B es mayor o igual que A" si B es mayor o igual que A. */

var a = 1,
  b = 1;
if (a > b) {
  console.log("A ES MAYOR");
} else if (b >= a) {
  console.log("B ES MAYOR O IGUAL QUE A");
}

/* Ejercicio 2: Evaluación de Edad:
Supongamos que estás desarrollando un programa para una aplicación que verifica 
si un usuario puede registrarse. Escribe una situación en la que el programa imprime
"Eres mayor de edad, puedes registrarte" si la edad del usuario es mayor o igual a 18, y "Lo siento, eres menor de edad, no puedes registrarte" si la edad es menor de 18 años. */
edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad, puedes registrarte");
} else {
  console.log("Lo siento, eres menor de edad, no puedes registrarte");
}
/* Ejercicio 1: Evaluación de Calificaciones
Descripción: Imagina que eres un profesor y 
necesitas evaluar las calificaciones de tus estudiantes para 
determinar si han aprobado o reprobado.

Condiciones:

Una calificación de 60 o más significa que el estudiante ha aprobado.
Una calificación de menos de 60 significa que el estudiante ha reprobado. */

let calificaciónDelEstudiante = 75;

if (calificaciónDelEstudiante >= 60) {
  document.write("APROBO!!!!!!!" + "<br>");
} else {
  document.write("REPROBO:(" + "<br>" + "<hr>");
}
//OPERADOR TERNARIO
let calificaciónDelEstudiante1 = 55;
var resultado =
  calificaciónDelEstudiante1 >= 60 ? "APROBO!!!!!!!" : "REPROBO:(";
document.write(resultado + "<br>" + "<hr>");

/* Ejercicio 3: Clasificación de Productos por Precio
Descripción: En una tienda, los productos se clasifican en 
diferentes categorías según su precio.

Condiciones:

Un producto con un precio menor a 20 se clasifica como "Barato".
Un producto con un precio entre 20 y 100 (inclusive) se clasifica como 
"Moderado".
Un producto con un precio mayor a 100 se clasifica como "Caro". */

var PreciosDeMercado = 15;
if (PreciosDeMercado < 20) {
  document.write("BARATO!!!!!" + "<br>");
} else if (PreciosDeMercado >= 20 && PreciosDeMercado <= 100) {
  document.write("MODERADO!!!!!" + "<br>");
} else {
  document.write("CARO :O" + "<br>" + "<hr>");
}
//OPERADOR TERNARIO

var precio = 150;

var resultadodeMercado =
  precio < 20
    ? "BARATO!!!!!"
    : precio <= 100
    ? "MODERADO!!!!!"
    : "CARO :O" + "<br>" + "<hr>";

document.write(resultadodeMercado);

//MISMOS EJERCICIOS PERO CON SWITCH
var calificacionDeEstudiante = 55;

switch (true) {
  case calificacionDeEstudiante >= 60:
    document.write("APROBASTE");
    break;
  case calificacionDeEstudiante < 60:
    document.write("REPROBASTE" + "<br>");
    break;
  default:
    document.write("LA CALIFICACIÓN NO PUEDE EXEDER DE LOS 100 PUNTOS");
}

var PreciosDeMercado1 = 80;
switch (true) {
  case PreciosDeMercado1 < 20:
    document.write("BARATO:)");
    break;
  case PreciosDeMercado1 >= 20 && PreciosDeMercado1 <= 100:
    document.write("MODERADO" + "<hr>");
    break;
  default:
    document.write("CARO");
    break;
}

/* Ejercicio 1: Evaluación de Día de la Semana:
Imagina que tienes una variable llamada diaSemana que contiene un número del 1 al 7,
donde 1 representa el lunes y 7 el domingo. Escribe un ejercicio que imprima por pantalla
el nombre del día correspondiente utilizando un switch. Por ejemplo, si diaSemana es 1, debería i
mprimir "Lunes"; si es 2, debería imprimir "Martes", y así sucesivamente hasta el domingo. */

var diaSemana = 9;
switch (diaSemana) {
  case 1:
    console.log("L");
    break;
  case 2:
    console.log("M");
    break;
  case 3:
    console.log("M");
    break;
  case 4:
    console.log("J");
    break;
  case 5:
    console.log("V");
    break;
  case 6:
    console.log("S");
    break;
  case 7:
    console.log("D");
    break;
  default:
    console.log("EL NUMERO INGRESADO NO EXISTE");
    break;
}
/* Ejercicio 2: Evaluación de Número:
Supongamos que tienes una variable llamada numero que puede contener valores del 1 al 5. 
Escribe un ejercicio que imprima por pantalla un mensaje específico para cada número utilizando 
switch. Por ejemplo, si numero es 1, 
debería imprimir "Uno"; si es 2, debería imprimir "Dos", y así sucesivamente hasta el 5. */

var dia = 1;
switch (dia) {
  case 1:
    console.log("uno");
    break;
  case 2:
    console.log("dos");
    break;
  case 3:
    console.log("tres");
    break;
  case 4:
    console.log("cuatro");
    break;
  case 5:
    console.log("cinco");
    break;
  default:
    console.log("EL NUMERO INGRESADO NO EXISTE");
    break;
}

/* Ejercicio con bucle for:
Escribe un bucle for que recorra los números del 1 al 10 y 
sume todos los números pares. Al final, debe imprimir la sumatotaldecofre de estos números pares. */
let sumatotaldecofre = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    sumatotaldecofre += i;
  }
}
console.log(sumatotaldecofre);

/* Factorial de un número: Calcula el factorial de un número dado utilizando un bucle while. 
El factorial de un número n se define como el producto de todos los enteros positivos menores o iguales a n. */

let fac = 1;
let n = 5;
while (n > 1) {
  fac *= n;
  n--;
}
console.log(fac);

/* Saludo personalizado: Escribe una función llamada saludar que tome un parámetro nombre y devuelva 
un saludo personalizado, por ejemplo, "¡Hola, María!".*/
// Definición de la función saludo que recibe un parámetro nombre

function saludar(nombre) {
  return "¡Hola, " + nombre + "!!!!!!!!!!!!!1";
}
console.log(saludar("Juan"));
