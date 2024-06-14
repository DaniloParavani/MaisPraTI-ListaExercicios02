// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let soma = 0;
let menorValor;
let quantidadeNumeros = 0;
let quantidadePares = 0;
let continuar;

do {
    const numero = parseFloat(prompt("Digite um número: "));

    soma += numero;
    
    if (quantidadeNumeros === 0 || numero < menorValor) {
        menorValor = numero;
    }

    if (numero % 2 === 0) {
        quantidadePares++;
    }

    quantidadeNumeros++;

    continuar = prompt("Deseja continuar? (S - Sim, N - Não): ").toUpperCase();
} while (continuar === 'S');

const media = soma / quantidadeNumeros;

console.log("A somatório entre todos os valores é: " + soma);
console.log("O menor valor digitado é: " + menorValor);
console.log("A média entre todos os valores é: " + media.toFixed(2));
console.log("A quantidade de valores pares é: " + quantidadePares);