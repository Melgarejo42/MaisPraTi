let teste = function () {
    console.log('Olá, mundo!')
}

teste()

function showFunction(successCallback, errorCallback) {
    if(false){
        successCallback("Requisição bem sucedida")
    } else {
        errorCallback("Erro na requisição")
    }
}

let successCallback = function(message) {
    console.log(message)
}

let errorCallback = function(message) {
    console.error(message)
}

showFunction(successCallback, errorCallback)

// -----------------------------------------------------------
//  Criar funções para os exercícios da Aula 09

// 1. Soma dos Elementos de um Array

// function sumArrayElements(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// let arr = [10, 20, 30, 40]
// let result = sumArrayElements(arr);

// console.log(result);

// // 2. Encontre o maior número de um array

// function findLargestNum(array) {
//     let max = array[0];
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[j] > max){
//             max = arr[j];
//         }
//     }
//     return max;
// }

// let arr = [10, 20, 30, 40]
// let largest = findLargestNum(arr);

// console.log(largest);

// // 3. Reverter um array

// function revertArray(array){
//     let reversed = [];
//     for (let k = array.length - 1; k >= 0; k--) {
//         reversed.push(array[k]);
//     }
//     return reversed;
// }

// let secondArr = [1, 2, 3, 4, 5]
// let reversed = revertArray(secondArr);

// console.log(reversed)

// // 4. Criem um novo array contendo apenas os números pares

// let thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function evenNumbersOnly(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// let result = evenNumbersOnly(thirdArr);
// console.log(result);

// let fourthArr = [10, 21, 30, 42, 51, 52, 60, 66, 70, 71];

// let result2 = evenNumbersOnly(fourthArr);
// console.log(result2);


// // 5. Contar ocorrências de um valor

// let fourthArr = [1, 2, 3, 4, 5, 6, 7, 5, 2, 1, 5, 9, 11, 15, 5, 2, 17];
// let cont = 0;

// for (let i = 0; i < fourthArr.length; i++) {
//     if (fourthArr[i] === 5) {
//         cont++
//     }
// }

// console.log(`O número 5 aparece ${cont} vezes no array.`)

// let nome = "Bruno"

// console.log("Bruno".length)
// console.log("Bruno".charAt(0))
// console.log(nome.indexOf('r'))

// console.log(nome.replace('Bruno', 'Keanu'))

// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// Matemáticos

// console.log(Math.ceil(100.73))
// console.log(Math.floor(100.73))
// console.log(Math.round(100.73))
// console.log(Math.sqrt(100))
// console.log(Math.pow(100, 2))
// console.log(Math.cbrt(100))
// console.log(Math.abs(100.20))
// console.log(Math.random())

// Datas
// Objeto DATE fornecido pelo Javascript - trabalha com as datas do computador do usuário

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth())

// Criar funções para:

// Inverter uma String
// Contar vogais
// Gerar numero aleatório
// Dias entre duas datas 
// Formatar data 