// Mejores prÃ¡cticas

// camelCase 
//  Utilizar mayusculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...
/*
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/

// Seguir un standard personal

// Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Direccion;


// Declaracion de variables
// Type Number
var edad = 18;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;

// Type String
var nombre = "Edwin Cavazos";
var ciudad = 'Allende';
var nacionalidad = `Mexicano`;

// Type null
var ganasDeBibir = null;
var nineros = null;
var briAmonestaciones = null;

// Variables declaradas con un mismo valor
var x, y, z = 4;

// Variables undefined
var xx, yy, zz; 

// Variable tres = 4
//  var dos = tres
//  var uno = tres
var uno = dos = tres = 4;

// Escribir en una sola linea variables undefined de nuestro carrito de compras


// variables indefinidas para un carrito de compras en una sola línea
var platos, agua, mayonesa, sabritas, jugos, carne, pollo, tomate, queso, papas;
// typeof() nos indica el tipo de dato al que pertenece nuestra variable
var a =2;
typeof(a);
'number'
//number
var b ="2";
typeof(b);
'string'
//string
var c= true;
typeof(c);
'boolean'
//booleano
var d= null;
typeof(d);
'object'
//isNaN() nos permite verificar si un dato es o no un número
//NaN es tal cual un tipo de dato en JavaScript
isNaN(NaN);
//true
var e=NaN;
isNaN(e);
//true
typeof(e);
//number



//Ejercicio de variables, 10 de cada una

//booleanos
var boolean= hambre=false, bateriaCelular=true, luzDeLaCasa=true, perroBonito=true, focoEncendido=true, briAmonestaciones=false, sueño=true, camaraEncendida=false, tecladoConectado=true, mouseConectado=true; 
//string
var integrante1="Edwin", integrante2="Jose", integrante3="Mariana", integrante4="Luzmy", integrante5="Ricardo", integrante6="Armando", instructor1="Felipe", instructor2="Ivonne",Mentor1="Alonso",Mentor2="Bri";
//number
var miEdad=18, edadPerro=3, cantidadNaranjas=20, cantidadDePC=1, cantidadDeHermanos=2, cantidadDePerros=3, cantidadDeAudifonos=3, dinero=1000, cantidadDeCamaras=1, cantidadDeMouse=2;
//Nueva forma de declarar variables
var a = 1;
//let nos permite modificar su valor actual sin restricciones
let a = 1;
//constante
//es una variable  de un dato que no va a cambiar
const a = 1;
//variables constantes deben mantenerse con un solo valor
//no es posible cambiarle su valor posterior a su declaracion
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const carros = ["BMW", "Volvo", "Mercedes", "Ford"];

const carritocompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const combinacion = [1, "Hola", null, "5"];
