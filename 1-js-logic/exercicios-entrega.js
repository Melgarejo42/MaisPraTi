// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.


// const input = require('prompt-sync')()

// let num = parseInt(input(`Digite um número: `), 10);

// if (num < 0) {
//     if (num % 2 === 0) {
//         console.log("O número é negativo e par.");
//     } else {
//         console.log("O número é negativo e ímpar.");
//     }
// } else {
//     if (num % 2 === 0) {
//         console.log("O número é positivo e par.");
//     } else {
//         console.log("O número é positivo e ímpar.");
//     }
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

// const input = require('prompt-sync')()

// let age = input(`Digite sua idade: `);

// if (age <= 0) {
//     console.log(`Valor inválido.`)
// } else if (age <= 12) {
//     console.log(`Idade: ${age}. Classificação: Criança.`)
// } else if (age > 12 && age <= 18) {
//     console.log(`Idade: ${age}. Classificação: Adolescente.`)
// } else if (age > 18 && age <= 64) {
//     console.log(`Idade: ${age}. Classificação: Adulto.`)
// } else {
//     console.log(`Idade: ${age}. Classificação: Idoso.`)
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const input = require('prompt-sync')()

// let nota = input(`Digite uma nota: `);

// if (nota >= 0 && nota < 5) {
//     console.log(`Nota: ${nota}. Status: Reprovado.`)
// } else if (nota >= 5 && nota <= 6) {
//     console.log(`Nota: ${nota}. Status: Recuperação.`)
// } else if (nota > 6 && nota <= 10) {
//     console.log(`Nota: ${nota}. Status: Aprovado.`)
// } else {
//     console.log(`Valor inválido.`);
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// const input = require('prompt-sync')()

// let escolha = parseInt(input(`Digite um número de 1 a 3: `), 10);

// switch (escolha) {
//     case 1: 
//         console.log("Você escolheu a Opção 1.")
//         break;

//     case 2: 
//         console.log("Você escolheu a Opção 2.")
//         break;

//     case 3: 
//         console.log("Você escolheu a Opção 3.")
//         break;

//     default: 
//         console.log("Opção inválida.")
//         break;
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// const input = require('prompt-sync')()

// let altura = parseFloat(input(`Digite sua altura (ex: 1.83): `));
// let peso = parseFloat(input(`Digite seu peso em kg: `));

// const IMC = peso / (altura * altura);
// const IMCFormatado = IMC.toFixed(2);

// if (IMC < 16.99) {
//     classificação = "Muito abaixo do peso";
// } else if (IMC >= 17 && IMC <= 18.49) {
//     classificação = "Abaixo do peso";
// } else if (IMC >= 18.50 && IMC <= 24.99) {
//     classificação = "Peso ideal";
// } else if (IMC >= 25 && IMC <= 29.99) {
//     classificação = "Acima do peso";
// } else if (IMC >= 30 && IMC <= 34.99) {
//     classificação = "Obesidade grau 1";
// } else if (IMC >= 35 && IMC <= 39.99) {
//     classificação = "Obesidade grau 2";
// } else {
//     classificação = "Obesidade grau 3";
// }

// console.log(`Seu IMC é ${IMCFormatado}. A classificação de seu peso é: ${classificação}.`)


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// const input = require('prompt-sync')()

// let A = parseInt(input(`Forneça o primeiro lado do triângulo: `));
// let B = parseInt(input(`Forneça o segundo lado do triângulo: `));
// let C = parseInt(input(`Forneça o terceiro lado do triângulo: `));

// if (A === B && B === C) {
//     console.log(`O triângulo é equilátero.`);
// } else if (A === B || A === C || B === C) {
//     console.log(`O triângulo é isósceles.`);
// } else {
//     console.log(`O triângulo é escaleno.`);
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// const input = require('prompt-sync')()

// let applesBought = parseInt(input(`Digite o número de maçãs compradas: `));

// let applePrice;

// if (applesBought < 12) {
//     applePrice = 0.30;
// } else {
//     applePrice = 0.25;
// }

// let totalPrice = applesBought * applePrice;
// let totalPriceFixed = totalPrice.toFixed(2);

// console.log(`Valor total da sua compra: R$ ${totalPriceFixed}`);

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// const input = require('prompt-sync')()

// let value = parseFloat(input(`Digite o primeiro valor: `));
// let value2 = parseFloat(input(`Digite o segundo valor: `));

// if (isNaN(value) || isNaN(value2)) {
//     console.log("Um dos valores não foi informado corretamente. Tente novamente.");
// } else if (value === value2) {
//     console.log("Os valores informados não podem ser iguais.");
// } else if (value < value2) {
//     console.log(`Valores em ordem crescente: ${value}, ${value2}`);
// } else {
//     console.log(`Valores em ordem crescente: ${value2}, ${value}`);
// }


// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// for (i = 10; i > 0; i--) {
//     console.log(i)
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// const input = require('prompt-sync')()

// let num = parseInt(input(`Digite um número inteiro: `));

// for (let i = 0; i < 10; i++) {
//     console.log(num);
// }



// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// const input = require('prompt-sync')()

// console.log("Você será solicitado a digitar 5 números diferentes, que serão somados ao final do programa.")

// let soma = 0;

// for (let i = 1; i <= 5; i++) {
//     let num = parseInt(input(`Digite o número ${i} de 5: `))
//     soma += num;
// }

// console.log(`A soma dos 5 números fornecidos é: ${soma}`);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

// ((Anotação: enquanto multiplicador for menor do que 10, iterar uma vez e aumentar o multiplicador em 1 unidade))

// const input = require('prompt-sync')()

// let num = parseFloat(input(`Digite um número: `));

// for (i = 1; i < 11; i++) {
//     console.log(`${num} * ${i} = ${num * i}`)
// }


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// const input = require('prompt-sync')();

// let sum = 0;
// let count = 0;

// while (true) {
//     let num = parseFloat(input("Digite um número (digite 0 para terminar e calcular a média dos números): "));

//     if (num === 0) {
//         break;
//     }

//     sum += num;
//     count++;
// }

// if (count > 0) {
//     let average = sum / count.toFixed(2);
//     console.log(`A média dos números é: ${average}`);
// } else {
//     console.log("Nenhum número foi fornecido.");
// }

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// const input = require('prompt-sync')();

// let num = parseInt(input("Digite um número para calcular o fatorial: "))
// let fatorial = 1

// for (let i = 1; i <= num; i++) {
//     fatorial *= i;
// }

// console.log(`O fatorial de ${num} é ${fatorial}.`)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// const input = require('prompt-sync')();

// let num1 = 0; 
// let num2 = 1;

// console.log("Os 10 primeiros números da sequência de Fibonacci são:");

// for (let i = 0; i < 10; i++) {
//     console.log(num1);
    
//     let proxNum = num1 + num2;
    
//     num1 = num2;
//     num2 = proxNum;
// }