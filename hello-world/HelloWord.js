const leia = require("readline-sync");
process.stdin.setEncoding('utf-8');

let mensagem ="Hello World";

console.log(mensagem);

const constante = "Variavel Constante";

// constante ="Tentando reatribuir";

console.log(constante);

mensagem = leia.question("Digite uma mensagem: \n");
console.log(mensagem);

let primeiroNumero = leia.questionInt("Digite o primeiro numero");
let segundoNumero = leia.questionInt("Digite o segundo numero");

let soma = primeiroNumero+segundoNumero;

console.log("A soma é ", soma);