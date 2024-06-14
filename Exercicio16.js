// 16. Crie uma lógica que preencha um vetorNumeros de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetorNumeros em ordem crescente, mostrando no final os valores ordenados.

let vetorNumeros = [];

for (let i = 0; i < 20; i++) {
    vetorNumeros.push(getRandomInt(0, 99));
}

console.log("Números aleatórios:");
console.log(vetorNumeros);

vetorNumeros.sort((a, b) => a - b);

console.log("\nNúmeros ordenados:");
console.log(vetorNumeros);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}