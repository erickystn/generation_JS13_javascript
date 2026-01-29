// Escreva um algoritmo, que leia números inteiros via teclado,
//  até que o número zero seja digitado. Ao final, mostre na 
//  tela a soma de todos os números digitados, 
//  que sejam positivos. Veja o exemplo abaixo:

const leitor = require("readline-sync");
let totalPositivos=0;


do {
    let escolha = leitor.questionInt("Digite um numero (ou 0 para sair): ");
    if(escolha === 0) break;
    if (escolha >0) totalPositivos+=escolha;
    
} while (true);
console.clear();
console.log(`A soma dos números positivos é: ${totalPositivos}`);