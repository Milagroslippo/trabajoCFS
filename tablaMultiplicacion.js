"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var tabla = rls.questionInt("ingrese el numero de la tabla que quiere ver: ");
var num = rls.questionInt("ingrese la cantidad de resultados que quiere ver en la tabla: ");
var result;
for (var i = 1; i <= num; i++) {
    result = tabla * i;
    console.log("".concat(tabla), "x", "".concat(i), "=", result);
}
