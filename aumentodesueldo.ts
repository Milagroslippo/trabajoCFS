import * as rls from "readline-sync"

let sueldo: number = 0;
sueldo = rls.questionFloat("ingrese su sueldo actual:$ ");
let sueldoCon20Aumento : number = sueldo *0.2;
let sueldoCon10Aumento : number = sueldo *0.1;
let sueldoCon5Aumento : number = sueldo *0.05;

let sueldoFinalcon20aum : number = (sueldo + sueldoCon20Aumento);
let sueldoFinalcon10aum : number = (sueldo + sueldoCon10Aumento);
let sueldoFinalcon5aum : number = (sueldo + sueldoCon5Aumento);

if (sueldo <= 15000) {console.log("usted tiene un aumento de:$ ", sueldoCon20Aumento, "\n Su sueldo neto es de: $", sueldoFinalcon20aum);} 
else if (sueldo>15000 && sueldo<=20000) {console.log("usted tiene un aumento de:$ ", sueldoCon10Aumento, "\n su sueldo neto es de:$ ", sueldoFinalcon10aum);}
else if (sueldo>20000 && sueldo<=25000) {console.log("usted tiene un aumento de:$ ", sueldoCon5Aumento, "\n su sueldo neto es de:$ ", sueldoFinalcon5aum);
} else {console.log("su sueldo neto es de:$", sueldo);}
