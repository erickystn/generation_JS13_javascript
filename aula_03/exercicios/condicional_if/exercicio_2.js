// Escreva um algoritmo que leia um número inteiro via teclado
// e mostre na tela uma mensagem indicando se este número é par ou ímpar
// e se o número é positivo ou negativo. Veja os exemplos abaixo:

const leitor = require("readline-sync");

const numero = leitor.questionInt("Digite um numero: ");
let mensagem = `O numero ${numero}`;

if (numero % 2 === 0) {
  mensagem += ` é Par`;
} else {
  mensagem += ` é Impar`;
}

if (numero > 0) {
  mensagem += ` e Positivo!`;
} else if (numero < 0) {
  mensagem += ` e Negativo!`;
} else {
  mensagem += ` e Neutro!`;
}

console.log(mensagem);
