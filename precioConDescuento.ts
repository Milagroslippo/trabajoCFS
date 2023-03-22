import *as rls from "readline-sync"
let precioFinal : number = 0; 
let precioProductoUno : number = 200;
let precioProductoDos : number = 350;

let cantidadProductoUno : number = rls.questionInt ("cantidad de producto uno que compro el cliente: ");
let cantidadProductoDos : number = rls.questionInt ("cantidad de producto dos que compro el cliente: ");
let subtotal : number = 0;
let valorDescuento : number = 0; 

subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
valorDescuento = (subtotal * 0.1);
precioFinal = (subtotal - valorDescuento);
if (subtotal > 1000) {console.log ("cantidad de producto 1: ", cantidadProductoUno, "\n cantidad de producto 2: ", cantidadProductoDos, "\n el subtotal es: ", subtotal, "\n ahorras: $", valorDescuento, "\n el precio final es de: ", precioFinal); }
else {console.log ("tu precio final es de:", subtotal);}
