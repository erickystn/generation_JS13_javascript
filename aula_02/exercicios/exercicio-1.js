const leitor = require("readline-sync");

const salario = leitor.questionFloat("Digite o salario: \n");
const abono = leitor.questionFloat("Digite o abono: \n");

const novoSalario = salario + abono;
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(` Salário: ${formatadorMoeda.format(salario)}
              Abono: ${formatadorMoeda.format(abono)}
              Novo Salário: ${formatadorMoeda.format(novoSalario)}`);
