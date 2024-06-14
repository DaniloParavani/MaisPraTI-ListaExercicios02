// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require('prompt-sync')();

const tabelaDadosFuncionarios = [
    {
        matricula: "001",
        nome: "Funcionário 1",
        salarioBruto: 3000
    },
    {
        matricula: "002",
        nome: "Funcionário 2",
        salarioBruto: 4000
    },
    {
        matricula: "003",
        nome: "Funcionário 3",
        salarioBruto: 3500
    },
    {
        matricula: "004",
        nome: "Funcionário 4",
        salarioBruto: 3200
    },
    {
        matricula: "005",
        nome: "Funcionário 5",
        salarioBruto: 4200
    },
    {
        matricula: "006",
        nome: "Funcionário 6",
        salarioBruto: 3700
    },
    {
        matricula: "007",
        nome: "Funcionário 7",
        salarioBruto: 3800
    },
    {
        matricula: "008",
        nome: "Funcionário 8",
        salarioBruto: 3100
    },
    {
        matricula: "009",
        nome: "Funcionário 9",
        salarioBruto: 3300
    },
    {
        matricula: "010",
        nome: "Funcionário 10",
        salarioBruto: 3900
    },
    {
        matricula: "011",
        nome: "Funcionário 11",
        salarioBruto: 3200
    },
    {
        matricula: "012",
        nome: "Funcionário 12",
        salarioBruto: 4000
    },
    {
        matricula: "013",
        nome: "Funcionário 13",
        salarioBruto: 3500
    },
    {
        matricula: "014",
        nome: "Funcionário 14",
        salarioBruto: 3300
    },
    {
        matricula: "015",
        nome: "Funcionário 15",
        salarioBruto: 4100
    },
    {
        matricula: "016",
        nome: "Funcionário 16",
        salarioBruto: 3600
    },
    {
        matricula: "017",
        nome: "Funcionário 17",
        salarioBruto: 3200
    },
    {
        matricula: "018",
        nome: "Funcionário 18",
        salarioBruto: 3800
    },
    {
        matricula: "019",
        nome: "Funcionário 19",
        salarioBruto: 3000
    },
    {
        matricula: "020",
        nome: "Funcionário 20",
        salarioBruto: 3500
    },
    {
        matricula: "021",
        nome: "Funcionário 21",
        salarioBruto: 4000
    },
    {
        matricula: "022",
        nome: "Funcionário 22",
        salarioBruto: 3700
    },
    {
        matricula: "023",
        nome: "Funcionário 23",
        salarioBruto: 3200
    },
    {
        matricula: "024",
        nome: "Funcionário 24",
        salarioBruto: 4100
    },
    {
        matricula: "025",
        nome: "Funcionário 25",
        salarioBruto: 3900
    },
    {
        matricula: "026",
        nome: "Funcionário 26",
        salarioBruto: 3300
    },
    {
        matricula: "027",
        nome: "Funcionário 27",
        salarioBruto: 3600
    },
    {
        matricula: "028",
        nome: "Funcionário 28",
        salarioBruto: 3800
    },
    {
        matricula: "029",
        nome: "Funcionário 29",
        salarioBruto: 3000
    },
    {
        matricula: "030",
        nome: "Funcionário 30",
        salarioBruto: 3500
    },
    {
        matricula: "031",
        nome: "Funcionário 31",
        salarioBruto: 4000
    },
    {
        matricula: "032",
        nome: "Funcionário 32",
        salarioBruto: 3700
    },
    {
        matricula: "033",
        nome: "Funcionário 33",
        salarioBruto: 3200
    },
    {
        matricula: "034",
        nome: "Funcionário 34",
        salarioBruto: 4100
    },
    {
        matricula: "035",
        nome: "Funcionário 35",
        salarioBruto: 3900
    },
    {
        matricula: "036",
        nome: "Funcionário 36",
        salarioBruto: 3300
    },
    {
        matricula: "037",
        nome: "Funcionário 37",
        salarioBruto: 3600
    },
    {
        matricula: "038",
        nome: "Funcionário 38",
        salarioBruto: 3800
    },
    {
        matricula: "039",
        nome: "Funcionário 39",
        salarioBruto: 3000
    },
    {
        matricula: "040",
        nome: "Funcionário 40",
        salarioBruto: 3500
    },
    {
        matricula: "041",
        nome: "Funcionário 41",
        salarioBruto: 4000
    },
    {
        matricula: "042",
        nome: "Funcionário 42",
        salarioBruto: 3700
    },
    {
        matricula: "043",
        nome: "Funcionário 43",
        salarioBruto: 3200
    },
    {
        matricula: "044",
        nome: "Funcionário 44",
        salarioBruto: 4100
    },
    {
        matricula: "045",
        nome: "Funcionário 45",
        salarioBruto: 3900
    },
    {
        matricula: "046",
        nome: "Funcionário 46",
        salarioBruto: 3300
    },
    {
        matricula: "047",
        nome: "Funcionário 47",
        salarioBruto: 3600
    },
    {
        matricula: "048",
        nome: "Funcionário 48",
        salarioBruto: 3800
    },
    {
        matricula: "049",
        nome: "Funcionário 49",
        salarioBruto: 3000
    },
    {
        matricula: "050",
        nome: "Funcionário 50",
        salarioBruto: 3500
    },
    {
        matricula: "051",
        nome: "Funcionário 51",
        salarioBruto: 4000
    },
    {
        matricula: "052",
        nome: "Funcionário 52",
        salarioBruto: 3700
    },
    {
        matricula: "053",
        nome: "Funcionário 53",
        salarioBruto: 3200
    },
    {
        matricula: "054",
        nome: "Funcionário 54",
        salarioBruto: 4100
    },
    {
        matricula: "055",
        nome: "Funcionário 55",
        salarioBruto: 3900
    },
    {
        matricula: "056",
        nome: "Funcionário 56",
        salarioBruto: 3300
    },
    {
        matricula: "057",
        nome: "Funcionário 57",
        salarioBruto: 3600
    },
    {
        matricula: "058",
        nome: "Funcionário 58",
        salarioBruto: 3800
    },
    {
        matricula: "059",
        nome: "Funcionário 59",
        salarioBruto: 3000
    },
    {
        matricula: "060",
        nome: "Funcionário 60",
        salarioBruto: 3500
    },
    {
        matricula: "061",
        nome: "Funcionário 61",
        salarioBruto: 4000
    },
    {
        matricula: "062",
        nome: "Funcionário 62",
        salarioBruto: 3700
    },
    {
        matricula: "063",
        nome: "Funcionário 63",
        salarioBruto: 3200
    },
    {
        matricula: "064",
        nome: "Funcionário 64",
        salarioBruto: 4100
    },
    {
        matricula: "065",
        nome: "Funcionário 65",
        salarioBruto: 3900
    },
    {
        matricula: "066",
        nome: "Funcionário 66",
        salarioBruto: 3300
    },
    {
        matricula: "067",
        nome: "Funcionário 67",
        salarioBruto: 3600
    },
    {
        matricula: "068",
        nome: "Funcionário 68",
        salarioBruto: 3800
    },
    {
        matricula: "069",
        nome: "Funcionário 69",
        salarioBruto: 3000
    },
    {
        matricula: "070",
        nome: "Funcionário 70",
        salarioBruto: 3500
    },
    {
        matricula: "071",
        nome: "Funcionário 71",
        salarioBruto: 4000
    },
    {
        matricula: "072",
        nome: "Funcionário 72",
        salarioBruto: 3700
    },
    {
        matricula: "073",
        nome: "Funcionário 73",
        salarioBruto: 3200
    },
    {
        matricula: "074",
        nome: "Funcionário 74",
        salarioBruto: 4100
    },
    {
        matricula: "075",
        nome: "Funcionário 75",
        salarioBruto: 3900
    },
    {
        matricula: "076",
        nome: "Funcionário 76",
        salarioBruto: 3300
    },
    {
        matricula: "077",
        nome: "Funcionário 77",
        salarioBruto: 3600
    },
    {
        matricula: "078",
        nome: "Funcionário 78",
        salarioBruto: 3800
    },
    {
        matricula: "079",
        nome: "Funcionário 79",
        salarioBruto: 3000
    },
    {
        matricula: "080",
        nome: "Funcionário 80",
        salarioBruto: 3500
    }
];

for (let index in tabelaDadosFuncionarios) {

    let funcionario = tabelaDadosFuncionarios[index];

    let deducaoINSS = calcularDeducaoINSS(funcionario.salarioBruto);
    let salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);

    exibirContracheque(funcionario, deducaoINSS, salarioLiquido);
}

function calcularDeducaoINSS(salarioBruto) {
    return salarioBruto * 0.12;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
}

function exibirContracheque(funcionario, deducaoINSS, salarioLiquido) {
    console.log("Matrícula: " + funcionario.matricula);
    console.log("Nome: " + funcionario.nome);
    console.log("Salário bruto: R$" + funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS: R$" + deducaoINSS.toFixed(2));
    console.log("Salário líquido: R$" + salarioLiquido.toFixed(2));
    console.log("\n");
}
