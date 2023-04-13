"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var sueldo = 0;
sueldo = rls.questionFloat("ingrese su sueldo actual:$ ");
var sueldoCon20Aumento = sueldo * 0.2;
var sueldoCon10Aumento = sueldo * 0.1;
var sueldoCon5Aumento = sueldo * 0.05;
var sueldoFinalcon20aum = (sueldo + sueldoCon20Aumento);
var sueldoFinalcon10aum = (sueldo + sueldoCon10Aumento);
var sueldoFinalcon5aum = (sueldo + sueldoCon5Aumento);
if (sueldo <= 15000) {
    console.log("usted tiene un aumento de:$ ", sueldoCon20Aumento, "\n Su sueldo neto es de: $", sueldoFinalcon20aum);
}
else if (sueldo > 15000 && sueldo <= 20000) {
    console.log("usted tiene un aumento de:$ ", sueldoCon10Aumento, "\n su sueldo neto es de:$ ", sueldoFinalcon10aum);
}
else if (sueldo > 20000 && sueldo <= 25000) {
    console.log("usted tiene un aumento de:$ ", sueldoCon5Aumento, "\n su sueldo neto es de:$ ", sueldoFinalcon5aum);
}
else {
    console.log("su sueldo neto es de:$", sueldo);
}
