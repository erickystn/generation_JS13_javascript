// SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
const leitor = require("readline-sync");
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const salarioBruto=  leitor.questionFloat("Digite o Salario Bruto: ");
const adicionalNoturno =  leitor.questionFloat("Digite o valor do Adicional Noturno: ");
const horasExtras =  leitor.questionFloat("Digite o valor das Horas Extras: \n") ;
const descontos=  leitor.questionFloat("Digite o valor do Desconto: \n");
const SalarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos;

console.log(`Salario Liquido: ${formatadorMoeda.format(SalarioLiquido)}`);
