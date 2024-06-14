// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

let matrizA = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let matrizB = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];


let matrizProduto = produtoMatriz(matrizA, matrizB);

for (let i = 0; i < 3; i++) {
    console.log(matrizProduto[i]);
}

function produtoMatriz(matrizA, matrizB) {

    let produto = [];

    for (let i = 0; i < 3; i++) {

        let linhaProduto = [];

        for (let j = 0; j < 5; j++) {

            let soma = 0;
            soma += matrizA[i][j] * matrizB[i][j];
            linhaProduto.push(soma);
        }

        produto.push(linhaProduto);
    }

    return produto;
}