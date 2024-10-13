// // 1. Soma dos Elementos de um Array

// let sum = 0;
// let arr = [10, 20, 30, 40]

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

//     console.log(sum)

// // 2. Encontre o maior número de um array

// let max = arr[0]

// for(let j = 0; j < arr.length; j++) {
//     if(arr[j] > max){
//         max = arr[j]
//     }
// }

// console.log(max)

// // 3. Reverter um array

// let secondArr = [1, 2, 3, 4, 5]
// let revArray = []

// for (let k = secondArr.length - 1; k >= 0; k--) {
//     revArray.push(secondArr[k])
// }

// console.log(revArray)

// // 4. Criem um novo array contendo apenas os números pares

// let thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i < thirdArr.length; i++) {
//     if (thirdArr[i] % 2 == 0){
//         console.log(thirdArr[i]);
//     }
// }

// // 5. Contar ocorrências de um valor

// let fourthArr = [1, 2, 3, 4, 5, 6, 7, 5, 2, 1, 5, 9, 11, 15, 5, 2, 17];
// let cont = 0;

// for (let i = 0; i < fourthArr.length; i++) {
//     if (fourthArr[i] === 5) {
//         cont++
//     }
// }

// console.log(`O número 5 aparece ${cont} vezes no array.`)



// arrays//vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// // console.table(matriz)
// // console.log(matriz[1][1])

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

// Soma de matrizes

// let A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let B = [
//     [4, 9, 3],
//     [7, 2, 1],
//     [8, 3, 3]
// ]

// let C = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]

// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//         C[i][j] = A[i][j] + B[i][j];
//     }
// }

// for (let i = 0; i < C.length; i++) {
//     console.log(C[i]);
// }

// Soma das diagonais em matrizes

