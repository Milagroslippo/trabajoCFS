"use strict";
//Escribir un algoritmo que nos pida una clave y verifique que sea la correcta. Tenga en cuenta que la clave es la palabra “eureka” Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado todas las oportunidades Si acertamos la clave, saldremos directamente del programa.
exports.__esModule = true;
var rls = require("readline-sync");
var clave = rls.question("ingrese la clave correcta: ");
var claveCorrecta = "eureka";
var contador = 3;
while (contador <= 3) {
    console.log(clave = claveCorrecta);
}
