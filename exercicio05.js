const prompt = require("prompt-sync")();

let alunos = [
    { nome: "Charlinho", nota1: 5, nota2: 3 },
    { nome: "Hermes", nota1: 7, nota2: 9 },
    { nome: "Renato", nota1: 4, nota2: 8 }
]

for (let aluno of alunos) {
    let mediaAluno = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${mediaAluno.toFixed(2)}`)
}