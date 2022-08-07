//Mejores prácticas
//Simplificar funciones lo mas que se pueda


//1. utilizar keyword function
//2. Nombrar nuestra función    
//3.Utilizar () y abrir y cerrar la funcion {}


function myFunction(){
    //aqui va el cuerpo de la función
    console.log("Hola mundo");
}
// myFunction();

function myName(){
    let name= "Edwin";
    console.log(name)
    
}
// myName();
function scopeFunction(){
    let local ="Esto se encuentra dentro de la funcion";
    console.log(local);
}
// scopeFunction();
// console.log(local);
var nombre= "Edwin Cavazos";
function globalScope(){
    console.log(nombre);

}
globalScope();
//Scope de variables
//Let 
//Hoisting: la variable no existe para nuestro interprete JS
    // console.log(x);
let a="hoisting let";
//Scope global, local

//Var
//Hoisting
//No se puede utilizar antes de declarar aparece como undefined
// console.log(x);
var x= "hola";
//Scope Local, global

//Const
//Hoisting: la variable no existe para nuestro interprete JS    
// console.log(c);
const c = "hoisting const";
//Scope global, local
//input
const miNombre = "Edwin";
function fiuFiu(x){
    console.log(x); 
}
//parámetro declarado en variable
fiuFiu(miNombre);
//parámetro aleatorio 
fiuFiu("Edwin Cavazos");
fiuFiu(2);

// fiuFiu(miNombre,2);


//funcion con mas de 1 parametro
function dosParam(x, y){
    console.log(x+y);
    // console.log(y);
}
//invocacion con dos parámetros
dosParam("hola", "mundo");

function tresParam(x,y,z){
    console.log(x+y+z);

}
tresParam("Hola ","Soy ", "Edwin");

function out(){
    let x = "hola";
    return x;
}
//podemos recibir el dato de forma directa
 
console.log(out());
//o tambien podemos guardar el output en una variable
const receive = out ();
//y la podemos usar despues
// console.log(receive);

//funcion con param y return

function areaRectangulo(b,a){
    var resultado = b*a;
    return resultado;

}
console.log(areaRectangulo(6,3));
function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return "hola"+resultado;
}

console.log(areaTriangulo(8, 4));

