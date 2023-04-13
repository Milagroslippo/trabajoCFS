//•Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene descuento o no.

import *as rls from "readline-sync"
let mes : string = rls.question("ingrese el mes actual: ");
let mesDescuento : string = "octubre";
let precioUnitario : number = rls.questionFloat("precio del producto:$ ");
let cantidadProducto : number = rls.questionInt("cantidad del producto: ");
let subtotal : number = (cantidadProducto*precioUnitario);
let valorDescuento : number = (subtotal* 0.15);
let precioFinal : number = (subtotal-valorDescuento);

if (mes == mesDescuento) {console.log("¡Usted obtiene descuento por ser nuestro mes de aniversario!", precioFinal);} 
else {console.log("su compra es de:$ ", subtotal);}
 