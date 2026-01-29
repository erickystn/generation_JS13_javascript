// Escreva um algoritmo, que leia 2 números inteiros via teclado, 
// onde o primeiro número deve ser menor do que o segundo número. 
// Caso contrário, deve ser exibida uma mensagem na tela informando 
// que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são 
// múltiplos de 3 e 5. Veja os exemplos abaixo:

const leitor = require("readline-sync");

const primeiroNum = leitor.questionInt("Digite o primeiro numero do intervalo: ");
const segundoNum = leitor.questionInt("Digite o primeiro numero do intervalo: ");

if(primeiroNum > segundoNum){
    console.log("Intervalo inválido!");
    return;
}
console.clear();
console.log(`No intervalo entre ${primeiroNum} e ${segundoNum}`);
for (let i = primeiroNum; i <= segundoNum; i++) {
    if((i % 3) === 0 && (i % 5) === 0 ){
        console.log(`${i} é múltiplo de 3 e 5`);
    }   
}
