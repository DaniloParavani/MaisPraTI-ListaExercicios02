// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Informe sua altura em metros: "));
let sexo = prompt("Informe seu sexo (masculino ou feminino): ");

let peso = calculaPesoIdeal(altura, sexo);

console.log("O peso ideal é: " + peso.toFixed(2) + " kg.");

function calculaPesoIdeal(altura, sexo) {

    if (sexo.toLowerCase() === "masculino") {
        return 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === "feminino") {
        return 62.1 * altura - 44.7;
    } else {
        return "Sexo não reconhecido. Por favor, insira 'masculino' ou 'feminino'.";
    }
}