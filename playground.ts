import * as rls from "readline-sync" 

const lap1: number = rls.questionFloat("ingrese tiempo de la primer vuelta: ");
const lap2: number = rls.questionFloat("ingrese tiempo de la segunda vuelta: ");
const lap3: number = rls.questionFloat("ingrese tiempo de la tercer vuelta: ");
const lap4: number = rls.questionFloat("ingrese tiempo de la cuarta vuelta: ");

const totalTime: number = lap1 + lap2 + lap3 + lap4;
const promedio: number = totalTime / 4;

console.log("el tiempo total de vueltas es de:", totalTime);
console.log("el promedio de cada vuelta es de:", promedio);

