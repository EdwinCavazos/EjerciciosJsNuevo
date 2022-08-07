console.log("Empieza la carrera");
let carrera = ["Roberto","Andrea","Jorge","Ramiro","Sofía"];
console.log(carrera);

console.log("////////////////Vuelta 1//////////////////");
console.log("////////////////Vuelta 2//////////////////");
console.log("////////////////Vuelta 3//////////////////");


console.log("Jorge toma la primera posición")
let carrera2=["Roberto","Andrea","Ramiro","Sofía"];
carrera2.unshift("Jorge");
console.log(carrera2);


console.log("Ramiro adelanta a Jorge y Roberto queda lesionado");
let carrera3=["Sofía"];
carrera3.unshift("Ramiro");
carrera3.splice(1,0,"Jorge");
carrera3.splice(2,0,"Andrea");
carrera3.splice(4,0,"Roberto");
console.log(carrera3);


console.log("Roberto sale de la carrera por lesión");
let carrera4 = ["Ramiro","Jorge","Andrea","Sofía","Roberto"]; //Roberto se lesiona y se atrasa
carrera4.pop(); //Roberto sale de la carrera
console.log(carrera4);


console.log("Andrea baja una posición");
let carrera5 = ["Ramiro","Jorge","Roberto"];
carrera5.splice(4,0,"Andrea");
carrera5.splice(3,0,"Sofía");
console.log(carrera5);
console.log("Entra nuevo jugador llamado José en la última posición");

let carrera6 = ["Ramiro","Jorge","Sofía","Andrea"];
carrera6.push("José");
console.log(carrera6);

console.log(
    "Resultados!\n",
    "Primer lugar: Ramiro.\n",
    "Segundo lugar: Jorge.\n",
    "Tercer lugar: Sofía.\n",
    "Cuarto lugar: Andrea.\n",
    "Quinto lugar: José.\n")




    