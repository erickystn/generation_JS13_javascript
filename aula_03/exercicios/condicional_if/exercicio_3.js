// Para doar sangue é necessário ter entre 18 e 69 anos.
// Pessoas com idade entre 60 e 69 anos, só podem doar sangue
// se não for a sua primeira doação. Escreva um Algoritmo que
// leia via teclado o nome do doador (string), a idade (número inteiro)
//  do doador e se já fez outras doações de sangue (boolean).
//   Conforme as Regras para a doação de sangue citadas acima,
//   mostre na tela se o doador está Apto ou Não Apto para doar sangue.
//    Veja os exemplos abaixo:

const leitor = require("readline-sync");

let mensagem = leitor.question("Digite o Nome do doador: ");
const idade = leitor.questionInt("Digite a Idade do doador: ");

if (idade >= 18 && idade <= 69) {
  const primeiraDoacao =
    leitor.question("E a primeira doacao? Digite S ou N: ") === "S";
  if (idade >= 60 && primeiraDoacao) {
    mensagem += ` não está apto para doar sangue !`;
  } else {
    mensagem += ` está apto para doar sangue!`;
  }
} else {
  mensagem += ` não está apto para doar sangue!`;
}

console.log(mensagem);
