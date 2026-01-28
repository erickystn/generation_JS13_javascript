// Com base na tabela abaixo, escreva um algoritmo que leia o
// código de um item (número inteiro entre 1 e 6) e a
// quantidade comprada deste item (número inteiro).
//  A seguir, mostre na tela o valor total da conta
//   e o nome do produto que foi comprado.

const leitor = require("readline-sync");
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log( [
    { codigo: 1, produto: "Cachorro Quente", preco: "R$ 10.00" },
    { codigo: 2, produto: "X-Salada", preco: "R$ 15.00" },
    { codigo: 3, produto: "X-Bacon", preco: "R$ 18.00" },
    { codigo: 4, produto: "Bauru", preco: "R$ 12.00" },
    { codigo: 5, produto: "Refrigerante", preco: "R$ 8.00" },
    { codigo: 6, produto: "Suco de laranja", preco: "R$ 13.00" },
]);

const codProduto = leitor.questionInt("Digite o codigo do produto: ");
let precoProduto = 0.0;
let nomeProduto = "";
let valorTotal = 0.0;

switch (codProduto) {
  case 1:
    precoProduto = 10;
    nomeProduto = "Cachorro Quente";
    break;
  case 2:
    precoProduto = 15;
    nomeProduto = "X-Salada";
    break;
  case 3:
    precoProduto = 18;
    nomeProduto = "X-Bacon";
    break;
  case 4:
    precoProduto = 12;
    nomeProduto = "Bauru";
    break;
  case 5:
    precoProduto = 8;
    nomeProduto = "Refrigerante";
    break;
  case 6:
    precoProduto = 13;
    nomeProduto = "Suco de Laranja";
    break;

  default:
    console.log("Codigo Produto Invalido!");
    break;
}

if (codProduto > 6 || codProduto < 1) return;

const qtdProduto = leitor.questionInt("Digite a quantidade comprada: ");

valorTotal = precoProduto * qtdProduto;

console.log(`
    Produto: ${nomeProduto}
    Valor total: ${formatadorMoeda.format(valorTotal)}
`);
