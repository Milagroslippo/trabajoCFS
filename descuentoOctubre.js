"use strict";
//•Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene descuento o no.
exports.__esModule = true;
var rls = require("readline-sync");
var mes = rls.question("ingrese el mes actual: ");
var mesDescuento = "octubre";
var precioUnitario = rls.questionFloat("precio del producto:$ ");
var cantidadProducto = rls.questionInt("cantidad del producto: ");
var subtotal = (cantidadProducto * precioUnitario);
var valorDescuento = (subtotal * 0.15);
var precioFinal = (subtotal - valorDescuento);
if (mes == mesDescuento) {
    console.log("¡Usted obtiene descuento por ser nuestro mes de aniversario!", precioFinal);
}
else {
    console.log("su compra es de:$ ", subtotal);
}
