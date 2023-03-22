"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var precioFinal = 0;
var precioProductoUno = 200;
var precioProductoDos = 350;
var cantidadProductoUno = rls.questionInt("cantidad de producto uno que compro el cliente: ");
var cantidadProductoDos = rls.questionInt("cantidad de producto dos que compro el cliente: ");
var subtotal = 0;
var valorDescuento = 0;
subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
valorDescuento = (subtotal * 0.1);
precioFinal = (subtotal - valorDescuento);
if (subtotal > 1000) {
    console.log("cantidad de producto 1: ", cantidadProductoUno, "\n cantidad de producto 2: ", cantidadProductoDos, "\n el subtotal es: ", subtotal, "\n ahorras: $", valorDescuento, "\n el precio final es de: ", precioFinal);
}
else {
    console.log("tu precio final es de:", subtotal);
}
