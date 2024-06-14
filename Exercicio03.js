// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

let distancia = parseFloat(prompt("Informe a distância que deseja percorrer em Km: "));

let precoKm;

if (distancia <= 200) {
    precoKm = 0.50;
} 
else {
    precoKm = 0.45;
}

let precoPassagem = distancia * precoKm;

console.log('O preço da passagem é R$' + precoPassagem.toFixed(2));