//Escribir un algoritmo que nos pida una clave y verifique que sea la correcta. Tenga en cuenta que la clave es la palabra “eureka” Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado todas las oportunidades Si acertamos la clave, saldremos directamente del programa.

import * as rls from "readline-sync"

let clave : string = rls.question("ingrese la clave correcta: ");

const claveCorrecta : string = "eureka";
const contador : number = 3;

while (contador <= 3 && clave != claveCorrecta); {console. log("la clave es correcta");}
