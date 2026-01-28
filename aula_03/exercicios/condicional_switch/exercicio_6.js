// Com base na tabela abaixo,
// escreva um algoritmo que leia o Nome do Colaborador (string),
// o Código do Cargo do Colaborador (número inteiro entre 1 e 6)
// e o Salário (número real). A seguir, mostre na tela o Nome do
// Colaborador, o Cargo e o novo Salário reajustado.

const leitor = require("readline-sync");
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.table( [
    { codigo: 1, cargo: "Gerente", reajuste: "10%" },
    { codigo: 2, cargo: "Vendedor", reajuste: "7%" },
    { codigo: 3, cargo: "Supervisor", reajuste: "9%" },
    { codigo: 4, cargo: "Motorista", reajuste: "6%" },
    { codigo: 5, cargo: "Estoquista", reajuste: "5%" },
    { codigo: 6, cargo: "Técnico de TI", reajuste: "8%" },
]);

const nomeColaborador = leitor.question("Digite o nome do Colaborador: ");
const codCargo = leitor.questionInt("Digite o codigo do cargo: ");
let reajuste = 0.0;
let cargo = "";
let novoSalario = 0.0;

switch (codCargo) {
  case 1:
    reajuste = 1.1;
    cargo = "Gerente";
    break;
  case 2:
    reajuste = 1.07;
    cargo = "Vendedor";
    break;
  case 3:
    reajuste = 1.09;
    cargo = "Supervisor";
    break;
  case 4:
    reajuste = 1.06;
    cargo = "Motorista";
    break;
  case 5:
    reajuste = 1.05;
    cargo = "Estoquista";
    break;
  case 6:
    reajuste = 1.08;
    cargo = "Tecnico de TI";
    break;

  default:
    console.log("Codigo Cargo Invalido!");
    break;
}

if (codCargo > 6 || codCargo < 1) return;
const salario = leitor.questionFloat("Digite o salario: ");
novoSalario = salario * reajuste;

console.log(`
Nome do colaborador: ${nomeColaborador}
Cargo: Gerente: ${cargo}
Salário: ${formatadorMoeda.format(novoSalario)}
`);
