// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')();

let salarios = [];
let numFilhos = [];

while (true) {

    let salario = parseFloat(prompt("Informe o salário (em R$) da pessoa: "));

    let numFilhosAtual = parseInt(prompt("Informe o número de filhos da pessoa: "));

    salarios.push(salario);
    numFilhos.push(numFilhosAtual);

    let resposta = prompt("Deseja adicionar um novo habitante? (s/n): ");
        
    if (resposta.toLowerCase() !== "s") {
        break;
    }
}

let estatisticas = calcularEstatisticas(salarios, numFilhos);

console.log("\n");
console.log("A média salarial é de R$" + estatisticas.mediaSalario.toFixed(2));
console.log("Média de filhos é de " + estatisticas.mediaFilhos.toFixed(2));
console.log("Maior salário: R$" + estatisticas.maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00: " + estatisticas.percentualSalarioAte350.toFixed(2) + "%");

function calcularEstatisticas(salarios, numFilhos) {

    let somaSalario = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let totalPessoas = salarios.length;
    let salarioAte350 = 0;

    for (let i = 0; i < totalPessoas; i++) {
        
        let salario = salarios[i];
        let numFilhosAtual = numFilhos[i];

        somaSalario += salario;
        somaFilhos += numFilhosAtual;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            salarioAte350++;
        }
    }

    let mediaSalario = somaSalario / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;
    let percentualSalarioAte350 = (salarioAte350 / totalPessoas) * 100;

    return {
        mediaSalario,
        mediaFilhos,
        maiorSalario,
        percentualSalarioAte350
    };
}