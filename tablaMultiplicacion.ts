import * as rls from "readline-sync"

let tabla : number = rls.questionInt("ingrese el numero de la tabla que quiere ver: ");
let num : number = rls.questionInt("ingrese la cantidad de resultados que quiere ver en la tabla: ");
let result : number;

for (let i : number = 1; i <= num; i++){
    result = tabla * i;
    console.log(`${tabla}`, "x", `${i}`, "=", result);
}