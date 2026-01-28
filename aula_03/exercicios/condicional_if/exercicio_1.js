// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
// imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leitor = require("readline-sync");

const valorA = leitor.questionInt("Digite o valor A: ");
const valorB = leitor.questionInt("Digite o valor B: ");
const valorC = leitor.questionInt("Digite o valor C: ");

if( valorA + valorB > valorC){
    console.log(`A Soma de A + B é Maior do que C`);
} else if(valorA + valorB < valorC){
     console.log(`A Soma de A + B é Menor do que C`);
}else{
    console.log("A Soma de A + B é Igual a C");
}