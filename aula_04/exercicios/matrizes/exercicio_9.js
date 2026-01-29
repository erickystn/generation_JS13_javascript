// Elabore um algoritmo que leia uma Matriz 3×3
// de números inteiros e em seguida, mostre na tela:
// -Todos os elementos da Diagonal Principal
// -Todos os elementos da Diagonal Secundária
// -A Soma de todos os elementos da Diagonal Principal
// -A Soma de todos os elementos da Diagonal Secundária

// Veja o exemplo abaixo:

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

console.log("Elementos da diagonal principal:");
let principal ="";
for (let i = 0; i < matriz.length; i++) {
  principal+=`${matriz[i][i]} `;
  somaDiagonalPrincipal += matriz[i][i];
}
console.log(principal)

console.log("Elementos da diagonal secundaria:");
let secundario ="";
for (let i = matriz.length - 1; i >= 0; i--) {
  secundario+=`${matriz[i][i]} `;
  somaDiagonalSecundaria += matriz[i][i];
}
console.log(secundario);

console.log(
  `Soma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`,
);
console.log(
  `Soma dos Elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`,
);
