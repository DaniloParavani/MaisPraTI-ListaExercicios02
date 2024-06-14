// 5. Crie um jogo de JoKenPo (pedra-papel-tesoura).

const prompt = require('prompt-sync')();

const jogador = prompt("Escolha sua jogada (pedra, papel ou tesoura): ").toLowerCase();

if ( (jogador != "pedra") && (jogador != "papel") && (jogador != "tesoura") ) {
    return console.log("Opção inválida!");
}

const computador = escolhaComputador();

console.log("Você escolheu: " + jogador);
console.log("O computador escolheu: " + computador);

if (jogador === computador) {
    console.log("Empate!");
} 
else if ((jogador === 'pedra' && computador === 'tesoura') || (jogador === 'papel' && computador === 'pedra') || (jogador === 'tesoura' && computador === 'papel')) {
    console.log("O jogador venceu!");
} 
else {
    console.log("O computador venceu!");
}

function escolhaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const index = Math.floor(Math.random() * 3);
    return opcoes[index];
}