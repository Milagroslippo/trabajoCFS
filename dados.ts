// al tirar un dado tenemos 1/6 de pribabilidades de sacar 6. Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6. Al aumentar el numero de dados la probabilidad de sacar todos 6 es cada vez menor. Esceba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (dato ingresado por el usuario)

import * as rls from "readline-sync"

let carasDados : number = 6;
let cantidadDados : number = rls.questionInt("ingrese cantidad de dados: ");

let denominador = Math.pow(carasDados, cantidadDados)
console.log("denominador: ", denominador)

let probabilidadTodosSeis = 1 / denominador
console.log(probabilidadTodosSeis * 100, "%");
