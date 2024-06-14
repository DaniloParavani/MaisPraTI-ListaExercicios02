// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

let velocidadeCarro = parseInt(prompt("Qual a velocidade do veículo (Km/h)? "));

if ( velocidadeCarro > 80 ) {

    let valorMulta = ( velocidadeCarro - 80 ) * 5;

    console.log("Você ultrapassou o limite de velocidade e será multado!");
    console.log("O valor da multa é de R$" + valorMulta.toFixed(2));
}
else {
    console.log("Fique tranquilo, você não foi multado.")
}