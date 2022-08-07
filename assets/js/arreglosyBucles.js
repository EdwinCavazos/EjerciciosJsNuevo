    /*arrays o arreglos
--Definición
Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar UN solo dato.
En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

un array ya no es un tipo de dato primitivo, se considera un objeto
porque es una estructura de datos



//Ejemplo 1
let nombre = "Edwin"; //Aqui se almacena un solo dato
array = ["Felpie", "Edwin", "Ivonne", "Jose"];

//Ejemplo de un array con diferentes tipos de datos
array2 =["Felipe",23,true,null, undefined];

-- Formas de crear un array--
1.Primera forma
En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

2.Segunda forma
La segunda forma se trata de crear arreglos solo usando corchetes
[].Esta forma es la mas usada para crear arreglos en js.

 var marcaDeColores2 =["Mapita","Norma","Vividel", "FaberCastell","BlancaNieves"];
 
 */
//Ejemplos de arreglos
// listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros","PitBull"];
// console.log(listaDePerritos);

// //Ejemplo de arreglos 2

listaDelSuper = ["Leche","Papitas","Jabón", "Nachos", "Agua"];
console.log(listaDelSuper);


//Arreglos por equipo:

//Lista 1
marcasDeTelefonos = ["Samsung","Oppo","Motorola","Xiaomi","Iphone"];
console.log(marcasDeTelefonos);
//Lista 2
listaDePeliculas = ["Whiplash", "Django", "Star Wars", "Toy Story", "Batman"];
console.log(listaDePeliculas);
//Lista 3
mangas= ["the boxer","one punch man","super campeones","hajime no hippo"];
console.log(mangas)
//Lista 4
marcasDeGuitarras = ["Fender", "Gibson", "Epiphone", "Yamaha", "ESP", "Ibanez", "Gretsch", "Paul Reed Smith"];
console.log(marcasDeGuitarras);
//Lista 5:
ListaDeAnimes = ["Dragon Ball Z", "One Piece", "Digimon", "Naruto Shippuden", "Pokémon"];
console.log(ListaDeAnimes);
//Lista 6:
var cancionesKanye = ["Bound 2", "Fade", "Last Call", "Wolves", "Saint Pablo", "New Slaves", "I AM A God"];
console.log(cancionesKanye);
//Lista 7:
var top5PeliculasAnime = ["me quiero comer tu pancreas","your name","La tumba de las luciernagas","El castillo vagabundo","El viaje de chihiro"]
console.log(top5PeliculasAnime);
/*
-- Acceder a elementos en un array
Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:
-Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices  

//Posicion de los elementos de la lista del super:
0: "Leche"
1: "Papitas"
2: "Jabón"
3: "Nachos"
4: "Agua"

//Posicion de elementos NO ES LO MISMO que su posición 

*/

console.log("el produco en la posicion 1 es:" +  listaDelSuper[1]);
console.log("el produco en la posicion 4 es:" +  listaDelSuper[4]);
console.log("el produco en la posicion 6 es:" +  listaDelSuper[6]);


//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.

/*
Array Asociativa 
son arreglos donde cada elemento, no solo está asociiado con su indice,si no que también está asignado un indicador 
Sintaxis de un arreglo asociativo

*/
//Ejemplo de una e-commerce
let propiedadesDeMiComputadora = {
    marca:"Asus", //la marca es mi identificador y "asus" es mi valor
    procesador:"Intel i7",
    ram: "16gb",
    almacenamiento:"1 TB",
    precio: "15000"
}
console.log(propiedadesDeMiComputadora);
console.log("la RAM de mi pc es:", propiedadesDeMiComputadora["ram"]);
console.log("la marca de la pc que elegiste es de:", propiedadesDeMiComputadora["marca"], "y su precio es de:",propiedadesDeMiComputadora["precio"]);
//Ejemplos de una Red social
let publicacionRedSocial = {
    nombre: "Edwin",
    usuario: "EdwinWinal",
    fecha: "viernes",
    likes: "5000",
    descripcion: "Esta es una bonita foto de mis papitas",
    ubicacion: "Nuevo León"
}
console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);
/*
Metodo de los arrays

En los arreglos tenemos ciertos métodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Podemos dividir estos métodos en 3:
    -Métodos que ya existen
    -Métodos accesores
    -Métodos repetitivos (spoiler)
    */
console.log("///////////////////////////////////////////////////////////////////")
//Metodos transformadores

var arrayDeEjemplo = ["Manzanas","Mangos","uvas","Fresas","Sandía","mandarinas"];
console.log("Este es nuestro arreglo original de 7 elementos",arrayDeEjemplo);

//Metodos transformadores 
//push():Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la pitaya a nuestro arreglo ejemplo:",arrayDeEjemplo);

//pop(): Eliminar el último elemento del arreglo
arrayDeEjemplo.pop();
console.log("Eliminamos el ultimo elemento de nuestro arreglo",arrayDeEjemplo);

//unshift(): Agregamos uno o más elementos al principio del arreglo
arrayDeEjemplo.unshift("Bananas","Tunas","Aguacate","Lichi");
console.log("Agregamos 4 elementos al principio del arreglo ",arrayDeEjemplo);

//shift(): Eliminar el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo",arrayDeEjemplo);
//sort(): ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente 
arrayDeEjemplo.sort();
console.log("Este es mi arreglo ordenado ",arrayDeEjemplo);
//sort(): ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente 
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido",arrayDeEjemplo);

//slice(); Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, si no que creamos una copia)
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3,7);
console.log("imprimimos la rebanada del arreglo original",saludo2);
var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);
var saludo4 = saludo1.slice(-9,-5);
console.log("Imprimimos la rebanada del arreglo original", saludo4);
/*
-Splice(); Modificar el arreglo en 3 formas distintas 
-eliminar el arreglo
-agregar elementos nuevos al arreglo
-Reemplazar elementos que ya existen en el arreglo
Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/
let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);



var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));


//toString
//value of : valor de 
// console.log(dulces.valueof()); 
/*

Investigar esto de tarea

    - toString
    - valueOf 
    - includes


*/

//toString(): Nos permite convertir un array en una cadena de texto 
console.log(mezcla.toString());

//valueof(): Nos permite devolver el valor de nuestro arreglo 
console.log(mezcla.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false

/*
Métodos repetidores 
*/

//filter(); Recorre el array y devuelve uno nuevo con los elementos que cumplan la condición.(Es como un bulce).

var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("numeros del 1 al 10",numeros);
//Filtraremos los datos del arreglo 
var numeros1al5 = numeros.filter(numeros => numeros <5);
console.log("Estos son los números que cumplen la condición al ser menores que 5",numeros1al5);

var numeros6a19 = numeros.filter(numero=> numero>=6 && numero<10);
console.log("Estos son los numeros que cumplen la condicion al ser mayores que 5 y menores que 18", numeros6a19);


//Map(); Recorrer el arreglo, modificar los elementos presentes en él, y retornar esos valores modifivcados en uno nuevo con la misma longitud que el arreglo original.
var map = numeros.map(numeros => numeros *3);
console.log("Esta es la tabla del 3",map);


//Ejercicio tablas del 1 al 10 
var arregloBase = [1,2,3,4,5,7,8,9,10];
var tabla2= numeros.map(arregloBase => arregloBase*2);
console.log("Esto es la tabla del 2",tabla2);

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);


/////////////////////////////////////////////////////////////////////////////////
/*

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

Normalmente tenemos 3 ciclos 
-While (mientras)
-Do while (hacer mientras)
-For (para)

Tenemos otras sentencias mas específicas:
-for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICIÓN

- for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR


//Sentencia while (mientras)
Esta sentencia nos va a permitir recorrer un bloque de código SIEMPRE que se cumpla una condición específica, donde el resultado debe ser true
La estructura WHILE es:
palabrareservada while (condición que siempre tiene que ser true){
 
    //codigo a ejecutar 
}

*/
//Programa para sumar números ALERTA ESTE PROGRAMA EXPLOTA LA PC
// let numeroParaSumar = 0;
// while(numeroParaSumar <10){
//     console.log("El número es menor a 10");
// }

let valorInicial = 0;
while (valorInicial <5){
    valorInicial ++;
    console.log(valorInicial);
}


let numeroInicial =1;
let valorLimite = prompt("Ingresa un número entero positivo");

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el Limite, ejecutamos lo de abajo

    if (numeroInicial % 2 !=0) { //si al dividir el numero inicial entre 2, el residuo es diferente de e (es impar)...
    
    console.log(numeroInicial); //Imprimimos el valor de La variable
    
    } numeroInicial++; // Incrementamos de uno en uno nuestra variable
 }
/*
Explicacion, si lees esto, saludos, Felipe :D
Ingresamos un 4
el inicial vale 1 
1 es menor o igual a 4?  si
entonces dividimos 1 entre 2. El residuo es diferente de 0? 
si
entonces imprimimos el inicial que es 1
termina el bucle, imprimimos el numero incial que es 1
sumamos uno al inicial
inicial ahora vale 2
 Número límite 4
 2 es menor o igual a 4?  si
entonces dividimos 2 entre 2. El residuo es diferente de 0? 
 si
 entonces imprimimos el inicial que es 2
 termina el bucle, imprimimos el número inicial que es 2
 sumamos uno al inicial
 inicial ahora vale 3
 número límite 4
 3 es menor o igual que 4? si
entonces dividimos 3 entre 2. El residuo es diferente de 0? 
 si
 entonces imprimimos el inicial que es 3
 termina el bulce, imprimimos el número inicial que es 3,
 sumamos uno al inicial
 inicial ahora vale 4
 4 es menor o igual a 4?  si
entonces dividimos 4 entre 2. El residuo es diferente de 0? 
si
  entonces procedemos a dividir. El residuo de 4 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 5.
    Termina el bucle, imprimimos el numero inicial que es 5.
    Inicial ahora vale 5
    5 es menor o igual a 4?
    no
    Termina el bucle, no imprimimos el numero inicial que es 5.
    Termina el programa.


*/





/*

Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.


Estructura basica de un do while

palabraReservada do{
    //Codigo a ejecutar
}
while(condicion);

*/

//Ejemplo 1

let numerito = 0; //Declaramos la variable en 0

do{//Esto se hara...
    console.log("El numero es: " + numerito);//imprimimos
    numerito ++; //aumentamos de 1 en 1
}

while (numerito <=10);//...hasta que el numero sea menor o igual a 10


//While vs Do While

console.log("While");

let numeroWhile = 0; //inciamos en 0
//imorime aca

while (numeroWhile <5){ //mientras variable sea menor a 5
    numeroWhile ++; //la incremento en 1
    console.log(numeroWhile); //la imprimo
    
}



console.log("Do WHile");
let numeroDoWhile = 0; //inciamos en 0
do{ //hacemos esto...
    console.log(numeroDoWhile); //imprimir
    numeroDoWhile ++; //aumentar en 1
}
while (numeroDoWhile<5);//...mientras numero sea menor a 5


/*

Sentencia FOR (para)

Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:


- El valor inicial de la variable que vamos a iterar (i = 0)
- La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}

*/

//Ejemplo: 

console.log("For");
for (let i = 0; i < 10; i++){
console.log(i);
}

//let i=0 es mi valor inicial
// i < 5 establece la condicion para que el bucle se siga ejecutando
// i++ incrementa el valor en 1


let animalitosDelBosque =["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones EN el arreglo

for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}
//of: valores DEL arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

// for in (lo que vamos a buscar en el arreglo)
// for of (lo que vamos a buscar del arreglo )