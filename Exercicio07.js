// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

const tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo): ").toLowerCase();

if ( (tipoCarro != "popular") && (tipoCarro != "luxo") ) {
    return console.log("Tipo do carro inválido!");
}

const diasAluguel = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
const kmPercorridos = parseFloat(prompt("Digite a quantidade de Km percorridos: "));

const precoAluguel = calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos);

console.log("O preço total do aluguel é: R$" + precoAluguel.toFixed(2));

function calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
    
    let preco;

    if (tipoCarro === 'popular') {
        preco = 90 * diasAluguel;
        
        if (kmPercorridos <= 100) {
            preco += 0.20 * kmPercorridos;
        } 
        else {
            preco += 0.10 * kmPercorridos;
        }
    } 
    else if (tipoCarro === 'luxo') {
        preco = 150 * diasAluguel;
        
        if (kmPercorridos <= 200) {
            preco += 0.30 * kmPercorridos;
        } 
        else {
            preco += 0.25 * kmPercorridos;
        }
    } 

    return preco;
}