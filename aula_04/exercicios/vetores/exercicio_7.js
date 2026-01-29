// Dado um vetor contendo 10 números inteiros não ordenados
//  e não repetidos, construa um algoritmo que consiga
//  pesquisar dados no vetor, onde o usuário irá digitar
//  um número e o programa deve exibir na tela a posição
//  deste número no vetor. Caso o número não seja encontrado,
//  a mensagem: “Não foi encontrado!” deve ser exibida na tela.
//  Veja os exemplos abaixo:

// Saída de dados
// Laços Condicionais
// Laços de Repetição
// Vetores
const leitor = require("readline-sync");
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const valorAPesquisar = leitor.questionInt(
  "Digite o numero que deseja encontrar: ",
);

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === valorAPesquisar) {
    console.log(`O número ${valorAPesquisar} está localizado na posição: ${i}`);
    break;
  }
  if (vetor.length - 1 === i) {
    console.log(`O numero ${valorAPesquisar} não foi encontrado!`);
  }
}
