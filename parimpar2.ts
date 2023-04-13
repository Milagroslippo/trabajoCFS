// Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar. En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero)

import * as rls from "readline-sync"

let inputNum:number = 0;

while(inputNum <= 0) {
    inputNum = rls.questionInt("ingrese un numero mayor que cero: ");
}

if(inputNum % 2 === 0) {console.log("el numero es par");
} else {console.log("el numero es impar");
}