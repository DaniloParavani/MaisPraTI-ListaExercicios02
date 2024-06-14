// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();

const numeroSorteado = sortearNumero();
let jogador;

jogador = parseInt(prompt("Digite um número entre 1 e 5: "));

if (jogador === numeroSorteado) {
    console.log("Parabéns! Você acertou o número!");
    console.log(numeroSorteado)
} 
else {
    console.log("Tente novamente!");
    console.log(numeroSorteado)

}

function sortearNumero() {
    return Math.floor(Math.random() * 5) + 1;
}