"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombreDeUsuario = rls.question("ingrese su nombre de usuario: ");
var contrasenia = rls.question("ingrese contrasenia: ");
var usuarioCorrecto = "Juan";
var contraseniaCorrecta = "ClaveJuan";
if (nombreDeUsuario == usuarioCorrecto && contrasenia == contraseniaCorrecta) {
    console.log("Bienvenido Juan, usted puede ingresar");
    0;
}
else {
    console.log("Usted no es Juan, no puede ingresar");
}
