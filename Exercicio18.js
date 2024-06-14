// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();

let funcionario = {
    nome: "",
    cargo: "",
    salario: 0
};

console.log("Digite os dados do funcionário:");
funcionario.nome = prompt("Nome: ");
funcionario.cargo = prompt("Cargo: ");
funcionario.salario = parseFloat(prompt("Salário: "));

console.log("\nRegistro do funcionário:");
console.log("Nome:", funcionario.nome);
console.log("Cargo:", funcionario.cargo);
console.log("Salário:", funcionario.salario);
