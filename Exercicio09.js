// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (true) {

    const salario = parseFloat(prompt("Digite o salário do funcionário: "));
    const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } 
    else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    } 
    else {
        console.log("Sexo inválido. Digite M para masculino ou F para feminino.");
        continue;
    }

    const continuar = prompt("Deseja inserir dados de outro funcionário? (S para Sim, N para Não): ").toUpperCase();
    
    if (continuar !== 'S') {
        break;
    }
}

console.log("\n");
console.log("Total de salário pago aos homens: R$" + totalSalarioHomens.toFixed(2));
console.log("Total de salário pago às mulheres: R$" + totalSalarioMulheres.toFixed(2));