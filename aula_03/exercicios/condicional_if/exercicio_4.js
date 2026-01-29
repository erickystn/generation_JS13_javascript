// Escreva um algoritmo que leia 3 palavras (string),
// que definem as características de um tipo de animal,
// segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.
"use strict"
const leitor = require("readline-sync");

const primeiraCarac = leitor.question("Digite a primeira caracteristica: ");
const segundaCarac = leitor.question("Digite a segunda caracteristica: ");
const terceiraCarac = leitor.question("Digite a terceira caracteristica: ");

if (primeiraCarac.toLowerCase() === "vertebrado") {
  if (segundaCarac.toLowerCase() === "ave") {
    if (terceiraCarac.toLowerCase() === "carnivoro") {
      console.log("AGUIA");
    } else if (terceiraCarac.toLowerCase() === "onivoro") {
      console.log("POMBA");
    } else {
      console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
    }
  } else if (segundaCarac.toLowerCase() === "mamifero") {
    if (terceiraCarac.toLocaleLowerCase() === "onivoro") {
      console.log("HOMEM");
    } else if (terceiraCarac.toLocaleLowerCase() === "herbivoro") {
      console.log("VACA");
    } else {
      console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
    }
  } else {
    console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
  }
} else if (primeiraCarac.toLowerCase() === "invertebrado") {
  if (segundaCarac.toLowerCase() === "inseto") {
    if (terceiraCarac.toLowerCase() === "hematofago") {
      console.log("PULGA");
    } else if (terceiraCarac.toLowerCase() === "herbivoro") {
      console.log("LAGARTA");
    } else {
      console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
    }
  } else if (segundaCarac.toLowerCase() === "anelideo") {
    if (terceiraCarac.toLowerCase() === "onivoro") {
      console.log("MINHOCA");
    } else if (terceiraCarac.toLowerCase() === "hematofago") {
      console.log("SANGUESSUGA");
    } else {
      console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
    }
  } else {
    console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
  }
} else {
  console.log("Digitado caracteristica(s) que foge(m) do escopo do programa");
}
