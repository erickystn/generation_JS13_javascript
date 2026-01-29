// Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples.
//  O programa deverá ler dois números reais: numero1 e numero2, 
//  e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). 
//  A seguir, mostre na tela o resultado da operação entre os 2 números. 
//  Caso o número da operação esteja fora do intervalo entre 1 e 4,
//   mostre a mensagem na tela Operação Inválida!


"use strict"
const leitor = require("readline-sync");

const primeiroNum = leitor.questionFloat("Digite o 1o numero: ");
const segundoNum = leitor.questionFloat("Digite o 2o numero: ");
let resultado;
let simboloOp="";

console.table([
  { Código: 1, Operação: "Soma" },
  { Código: 2, Operação: "Subtração" },
  { Código: 3, Operação: "Multiplicação" },
  { Código: 4, Operação: "Divisão" }
]);
const operacao = leitor.questionInt("Digite o codigo da operacao: ");

switch(operacao){
    case 1: resultado=primeiroNum+segundoNum; simboloOp="+";
     break;
    case 2: resultado=primeiroNum-segundoNum;simboloOp="-"; break;
    case 3: resultado=primeiroNum*segundoNum;simboloOp="*"; break;
    case 4: resultado=primeiroNum/segundoNum;simboloOp="/"; break;
    default: console.log("Codigo inválido! Encerrando..."); return;
}

console.log(`${primeiroNum} ${simboloOp} ${segundoNum} = ${resultado} `);