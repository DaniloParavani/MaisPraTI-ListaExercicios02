// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

let matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

let valorA = 2;

let vetor = multiplicarMatriz(matriz, valorA);

console.log(vetor);

function multiplicarMatriz(matriz, valor) {

    let vetor = [];
    let k = 0;

    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < 6; j++) {

            vetor[k] = matriz[i][j] * valor;
            k++;
        }
    }

    return vetor;
}