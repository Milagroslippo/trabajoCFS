//Cree un algoritmo que visualice los números que son múltiplos de 2 o de 3 que hay entre 1 y 100 tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo En dichos casos, solamente indique el número una vez.

let result: string = "";
for (let i: number = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) result += `${i}, `;
}
console.log(result); 