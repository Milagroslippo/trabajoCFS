// desarrolle un algoritmo que dados tres numeros determine cual es el mayor de los tres

import * as rls from "readline-sync"
let num1 : number = rls.questionInt("ingrese primer numero: ");
let num2 : number = rls.questionInt("ingrese segundo numero: ");
let num3 : number = rls.questionInt("ingrese tercer numero: ");

if (num1 > num2 && num1>num3) {console.log("el primer numero es mayor");}
else if (num2 > num1 && num2 > num3) {console.log("el segundo numero es mayor");}
else if (num1 == num2 && num2 == num3) {console.log("todos los numeros son iguales");}
else if (num1 == num2 && num1 != num3) {console.log("el primer y el segundo son iguales");}
else if (num2 == num3 && num2 != num1) {console.log("el segundo y el tercer numero son iguales");}

else {console.log("el tercer numero es mayor");}