// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

let matriz = [
    [4, -10, 6, 9, -7, 3, -12, -18],
    [14, -19, 18, -5, -2, 17, -11, -8],
    [-17, 7, -16, 15, 2, -13, 20, -4],
    [11, -15, 1, -20, 10, 5, -8, 19],
    [-6, 12, -14, 3, -9, 16, -1, 13],
    [20, -11, -4, 18, 5, -19, 7, -2]
];

let vetor = [];

for (let i = 0; i < matriz.length; i++) {

    let contador = 0;

    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 0) {
            contador++;
        }
    }

    vetor.push(contador);
}

console.log("Vetor:");
console.log(vetor);