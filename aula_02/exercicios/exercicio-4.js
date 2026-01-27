// Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do
// produto entre o n1 e n2 pelo produto entre o n3 e o n4.

const leitor = require("readline-sync");
const numeros = [];

for (let i = 0; i < 4; i++) {
  numeros[i] = leitor.questionFloat(`Digite o ${i + 1}o numero: `);
}

const calculo = numeros[0] * numeros[1] - numeros[2] * numeros[3];

console.log(`
    A diferença entre os produtos de [${numeros[0]},${numeros[1]}] e [${numeros[2]},${numeros[3]}] é ${calculo.toFixed(1)}`);
