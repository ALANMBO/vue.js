//ASIGNACIÓN, CONSOLE LOG y TYPEOF en JAVASCRIPT 

/*Asignación de Variables Básica:

Asigna el valor 10 a una variable llamada a.
Asigna el valor 20 a una variable llamada b.
Asigna el valor a + b a una variable llamada c. */
var a = 10 , b = 20 , c 
c = a + b 
console.log("LA SUMA ES : "+ typeof c)

/* Asignación de Cadenas de Texto:

Asigna la cadena "Hola" a una variable llamada saludo.
Asigna la cadena "Mundo" a una variable llamada objeto.
Asigna la concatenación de saludo y objeto a una variable llamada mensaje. */
let saludo =  " HOLA "  
let objeto = " MUNDO "
let mensaje = saludo + objeto
console.log("EL MENSAJE ES :" + typeof mensaje)

/*Asignación de Booleanos:

Asigna el valor true a una variable llamada esVerdadero.
Asigna el valor false a una variable llamada esFalso. */

var esVerdadero = true
var esFalso = false

var comida = 2800  
var comida1 = 1300
let sumadecomida = comida + comida1
var bebida = 900
var bebida1 = 650
let sumadeBebida = bebida + bebida1

console.log("LA COMIDA ES $:" + sumadecomida)
console.log("LA BEBIDA ES $:" + sumadeBebida)

/* Ejercicio 1: Comparación de Números:
Imagina que tienes dos números enteros, A y B. Escribe un ejercicio que muestre por pantalla
el mensaje "A es mayor que B" si A es mayor que B, y "B es mayor o igual que A" si B es mayor o igual que A. */

var a = 1 , b = 1
if(a > b ){
    console.log("A ES MAYOR")
}else if(b >=a){
    console.log("B ES MAYOR O IGUAL QUE A")
}

/* Ejercicio 2: Evaluación de Edad:
Supongamos que estás desarrollando un programa para una aplicación que verifica 
si un usuario puede registrarse. Escribe una situación en la que el programa imprime
"Eres mayor de edad, puedes registrarte" si la edad del usuario es mayor o igual a 18, y "Lo siento, eres menor de edad, no puedes registrarte" si la edad es menor de 18 años. */
    edad = 18
    if(edad >= 18){
        console.log("Eres mayor de edad, puedes registrarte")
    }else{
        console.log("Lo siento, eres menor de edad, no puedes registrarte")
    }
/* Ejercicio 1: Evaluación de Día de la Semana:
Imagina que tienes una variable llamada diaSemana que contiene un número del 1 al 7,
donde 1 representa el lunes y 7 el domingo. Escribe un ejercicio que imprima por pantalla
el nombre del día correspondiente utilizando un switch. Por ejemplo, si diaSemana es 1, debería i
mprimir "Lunes"; si es 2, debería imprimir "Martes", y así sucesivamente hasta el domingo. */

var diaSemana = 9
switch(diaSemana){
    case 1 : console.log("L") ; break;
    case 2 : console.log("M") ; break;
    case 3 : console.log("M") ; break;
    case 4 : console.log("J") ; break;
    case 5 : console.log("V") ; break;
    case 6 : console.log("S") ; break;
    case 7 : console.log("D") ; break;
    default:console.log("EL NUMERO INGRESADO NO EXISTE");break;
}
/* Ejercicio 2: Evaluación de Número:
Supongamos que tienes una variable llamada numero que puede contener valores del 1 al 5. 
Escribe un ejercicio que imprima por pantalla un mensaje específico para cada número utilizando 
switch. Por ejemplo, si numero es 1, 
debería imprimir "Uno"; si es 2, debería imprimir "Dos", y así sucesivamente hasta el 5. */

var dia = 1
switch(dia){
    case 1 : console.log("uno");break;
    case 2 : console.log("dos");break;
    case 3 : console.log("tres");break;
    case 4 : console.log("cuatro");break;
    case 5 : console.log("cinco");break;
    default:console.log("EL NUMERO INGRESADO NO EXISTE");break;
}
