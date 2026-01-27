//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
// exiba na tela a média final do participante
const leitor = require("readline-sync");

const notas = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
  notas[i] = leitor.questionFloat(`Digite a ${i + 1}a nota: `);
  soma += notas[i];
}
console.clear();

notas.forEach((nota, index) =>console.log(`${index + 1}a nota: ${nota.toFixed(1)}`));
console.log(`Média final: ${(soma/notas.length).toFixed(1)}`)
