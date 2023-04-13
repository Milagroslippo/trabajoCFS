import *as rls from "readline-sync" 

let nombreDeUsuario : string = rls.question("ingrese su nombre de usuario: ");
let contrasenia: string = rls.question("ingrese contrasenia: ");
const usuarioCorrecto: string = "Juan"
const contraseniaCorrecta: string = "ClaveJuan"

if( nombreDeUsuario == usuarioCorrecto && contrasenia == contraseniaCorrecta) {console.log("Bienvenido Juan, usted puede ingresar");0
}
else {console.log("Usted no es Juan, no puede ingresar");}
