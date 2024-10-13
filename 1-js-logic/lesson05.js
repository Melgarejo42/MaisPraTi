
/*
//console.log("Hello, World!")

//console.log(typeof(10), 1000, "Bruno")

//Operadores lógicos

//console.log((10 < 5) && (10 > 2)) -> retorna falso pois uma das comparações é falsa
//console.log((10 > 5 ))

let user = "Aluno"
let password = "Aluno123"

let authentication = user === "Aluno" && password === "Aluno123"

console.log(authentication)
*/

// let age = 10

// if(age >= 18 && age <= 32) {
//     console.log("Pode fazer o curso")
// } else if(age >= 80) {
//     console.log("Acima de 80 anos")
// } else {
//     console.log("Não pode fazer o curso")
// }

// Ternário (usar somente para pequenas informações)
// <condicao> ? <verdadeiro> : <falso>
// let ternaryResult = (10 < 100) ? 'Verdadeira' : 'Falsa'

// Exercicio 1: Verificar número par ou ímpar -------------------------

// let num = 34

// if (num % 2 == 0) {
//     console.log("O número é par")
// } else {
//     console.log("O número é ímpar")
// }

// Exercicio 2: Comparação de três números

// let num1 = 2
// let num2 = 2
// let num3 = 2

// if (num1 > num2 && num1 > num3) {
//     console.log("O maior número é o primeiro")
// } else if (num2 > num1 && num2 > num3) {
//     console.log("O maior número é o segundo")
// } else {
//     console.log("O maior número é o terceiro")
// }

// Exercício 3: Calculadora simples

// let num1 = 3
// let num2 = 2
// let calc = 1

// if (calc === 1) {
//     console.log(num1 + num2)
// } else if (calc === 2) {
//     console.log(num1 - num2)
// } else if (calc === 3) {
//     console.log(num1 * num2)
// } else if (calc === 4) {
//     console.log(num1 / num2)
// }


// Exemplo de SWITCH CASE

// let option = 1

// switch(option) {
//     case 1:
//         console.log("Você selecionou a primeira opção")
//         break
//     case 2:
//         console.log("Você selecionou a  segunda opção")
//         break
//     default:
//         console.log("Você não escolheu nenhuma das opções")
//         break
// }

// Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

// let weekday = 1

// switch(weekday) {
//     case 1:
//         console.log("Hoje é domingo.")
//         break
//     case 2:
//         console.log("Hoje é segunda-feira.")
//         break
//     case 3:
//         console.log("Hoje é terça-feira.")
//         break
//     case 4:
//         console.log("Hoje é quarta-feira.")
//         break
//     case 5:
//         console.log("Hoje é quinta-feira.")
//         break
//     case 6:
//         console.log("Hoje é sexta-feira.")
//         break
//     case 7:
//         console.log("Hoje é sábado.")
//         break
//     default:
//         console.log("Valor inválido.")
//         break
// }

// Exercício 2: Calcular o número de dias em um mês.

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias

// let mes = 7

// switch(mes) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Este mês tem 31 dias")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Este mês tem 30 dias")
//         break
//     case 2:
//         console.log("Este mês tem 28 dias")
//         break
//     default:
//         console.log("Valor inválido.")
//         break
// }


// Exercício 3: Calculadora com SWITCH CASE

// let num1 = 5
// let num2 = 2
// let operation = 1

// switch(operation) {
//     case 1:
//         console.log(num1 + num2)
//         break
//     case 2:
//         console.log(num1 - num2)
//         break
//     case 3:
//         console.log(num1 / num2)
//         break
//     case 4:
//         console.log(num1 * num2)
//         break
//     default:
//         console.log("Você não informou uma operação válida.")
//         break
// }

// AULA 04

// Exercício 1 - Calcular média dos alunos

// 1) Quais são os dados de entrada?
// R: Nota da Prova 1 e da Prova 2

// 2) Qual será o processamento?
// R: Somar as duas notas e dividir por 2

// 3) Quais serão os dados de saída?
// R: O resultado do processamento, ou seja, P1 + P2 / 2

// let nota1 = 9
// let nota2 = 7
// let nota3 = 9
// let media = (nota1 + nota2 + nota3) / 3;
// let conceito;

// if (media >= 9) {
//     conceito = "A";
// } else if (media >=8 && media < 9) {
//     conceito = "B";
// } else if (media >=7 && media < 8) {
//     conceito = "C";
// } else if (media >=6 && media < 7) {
//     conceito = "D";
// } else {
//     conceito = "F";
// }

// console.log(media)
// console.log(`Sua média conceitual é ${conceito}.`)

// Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.

// let num = 9;

// if (num % 2 == 0) {
//     console.log(`O número ${num} é par.`)
// } else {
//     console.log(`O número ${num} é ímpar.`)
// }

// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

// let age = 15;

// console.log(`A idade do nadador é ${age}. Categoria:`)
// if (age >= 5 && age <= 7) {
//     console.log("Infantil A");
// } else if (age >= 8 && age <= 10) {
//     console.log("Infantil B");
// } else if (age >= 11 && age <= 13) {
//     console.log("Juvenil A");
// } else if (age >= 14 && age <= 17) {
//     console.log("Juvenil B");
// } else {
//     console.log("Adulto");
// }


// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
//     Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)
    
// let estacao = 3

// switch(estacao) {
//     case 1:
//         console.log("Primavera")
//         break
//     case 2:
//         console.log("Verão")
//         break
//     case 3:
//         console.log("Outono")
//         break
//     case 4:
//         console.log("Inverno")
//         break
//     default:
//         console.log("Você não informou uma operação válida.")
//         break
// }


// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

// let peso = 82;
// let altura = 1.82;
// let alturaAoQuad = altura * altura;

// const IMC = peso / alturaAoQuad;

// console.log(`Seu IMC é ${IMC}.`)
// console.log("Sua classificação de IMC é:")

// if (IMC < 18.5) {
//     console.log("Abaixo do peso.")
// } else if (IMC >= 18.5 && IMC <= 24.9) {
//     console.log("Peso normal.")
// } else if (IMC >= 25 && IMC <= 29.9) {
//     console.log("Sobrepeso.")
// } else if (IMC >= 30 && IMC <= 34.9) {
//     console.log("Obesidade grau I.")
// } else if (IMC >= 35 && IMC <= 39.9) {
//     console.log("Obesidade grau II.")
// } else {
//     console.log("Obesidade grau III.")
// }

// const prompt = require('prompt-sync')();

// let prime = Number(prompt('Qual número deseja verificar? '))

// for(let i = 1; i < prime; i++){
//     if((prime % i === 0) && (i !== 1)){
//         console.log('Não é primo!')
//         break
//     }

//     if(i === (prime - 1)){
//         console.log('É primo!')
//     }
// }


// let pessoas = []

// console.log(pessoas)

// pessoas.push('Bruno')

// console.log(pessoas)

// let gatos = ['Florinda', 'Horus', 'Pituca']

// console.log(pessoas, gatos)

// let num1 = 10
// let num2 = 5

// console.log(num1 * num2)

// let numTest = "123abc456"
// console.log(numTest)

// let numTest2 = parseInt(numTest)
// console.log(numTest2)