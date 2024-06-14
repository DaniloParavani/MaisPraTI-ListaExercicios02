// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

let comprimento1 = parseFloat(prompt("Informe o tamanho da primeira reta: "));
let comprimento2 = parseFloat(prompt("Informe o tamanho da segunda reta: "));
let comprimento3 = parseFloat(prompt("Informe o tamanho da terceira reta: "));

console.log("\n")

if (comprimento1 < comprimento2 + comprimento3 && comprimento2 < comprimento1 + comprimento3 && comprimento3 < comprimento1 + comprimento2) {
    console.log("É possível formar um triângulo com os segmentos de reta informados.");
} 
else {
    console.log("Não é possível formar um triângulo com os segmentos de reta informados.");
}