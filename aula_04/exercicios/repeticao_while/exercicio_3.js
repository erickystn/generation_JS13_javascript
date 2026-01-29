// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros),
//  via teclado e mostre na tela o total de pessoas cuja idade seja menor que 
//  21 anos e o total de pessoas cuja idade, seja maior que 50 anos. 
//  A leitura dos dados deve ser finalizada ao digitar uma idade negativa. 
//  Veja o exemplo abaixo:

const leitor = require("readline-sync");
let menor21=0;
let maior50=0;

while(true){
    let idade = leitor.questionInt("Digite a idade (ou -1 para sair):");
    if(idade === -1) break;
    if(idade < 21) menor21++;
    if(idade > 50) maior50++;
}

console.log(`
Total de pessoas menores de 21 anos: ${menor21}
Total de pessoas maiores de 50 anos: ${maior50}
`);