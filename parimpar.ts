//•Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si elnúmero es par o impar y le informe al usuario. En el caso de ser 0 (cero) el algoritmo deberá informarlo.

import *as rls from "readline-sync"

let nro : number = rls.questionInt("ingrese un numero: ");
if (nro == 0) {console.log("el numero es cero");} else if (nro %2 == 0) {console.log("el numero", nro, "es par");}
else {console.log("el numero", nro, "es impar");}

