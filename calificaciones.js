"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nota1 = rls.questionInt("ingrese nota 1: ");
var nota2 = rls.questionInt("ingrese nota 2: ");
var nota3 = rls.questionInt("ingrese nota 3: ");
var nombreAlumno = rls.question("ingrese nombre alumno: ");
var result = 0;
while (nombreAlumno != "") {
    result = nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.40;
    console.log(result);
    nombreAlumno = rls.question("ingrese nombre alumno: ");
    if (nombreAlumno != "") {
        nota1 = rls.questionInt("ingrese nota 1: ");
        nota2 = rls.questionInt("ingrese nota 2: ");
        nota3 = rls.questionInt("ingrese nota 3: ");
    }
}
