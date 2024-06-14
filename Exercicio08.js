// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')();

const horasAtividadeMes = parseInt(prompt("Digite a quantidade de horas de atividade física no mês: "));

const resultado = calcularPontos(horasAtividadeMes);

console.log("\n");
console.log("Você ganhou " + resultado.pontos + " pontos.");
console.log("Isso equivale a R$" + resultado.dinheiro.toFixed(2));

function calcularPontos(horasAtividadeMes) {
    let pontos, dinheiro;

    if (horasAtividadeMes <= 10) {
        pontos = horasAtividadeMes * 2;
    } 
    else if (horasAtividadeMes <= 20) {
        pontos = horasAtividadeMes * 5;
    } 
    else {
        pontos = horasAtividadeMes * 10;
    }

    dinheiro = pontos * 0.05;

    return { pontos: pontos, dinheiro: dinheiro };
}