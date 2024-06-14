// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

let qtdCigarros = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let qtdAnos     = parseInt(prompt("Informe a quantidade de anos que você fumou. "));

console.log("\n");

let diasPerdidosDeVida = (qtdCigarros * 10 * qtdAnos * 365) / 1440;

console.log('Você perdeu ' + Math.round(diasPerdidosDeVida) + ' dias da sua vida!');