"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaIndicada = rls.questionInt("indique su altura en cm: ");
if (alturaIndicada >= 130) {
    console.log("aprobado para subir a la montaña rusa: ", alturaIndicada);
}
else {
    console.log("no aprobado para subir a la montaña rusa");
}
