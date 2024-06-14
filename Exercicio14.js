// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')();

let nomePessoas = [];

for (let i = 0; i < 7; i++) {

    let nome = prompt("Informe o nome de uma pessoa: ");
    nomePessoas.push(nome);
}

console.log('\n');

for (let i = nomePessoas.length - 1; i >= 0; i--) {
    console.log(nomePessoas[i]);
}