import *as rls from "readline-sync"
let alturaIndicada : number = rls.questionInt ("indique su altura en cm: ");

if (alturaIndicada >= 130) {console.log ("aprobado para subir a la montaña rusa: ", alturaIndicada);} 
else {console.log ("no aprobado para subir a la montaña rusa");}