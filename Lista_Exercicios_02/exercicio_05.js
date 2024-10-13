let alunos = [
    { nome: 'Charlinho', nota1: 8, nota2: 7 },
    { nome: 'Hermes', nota1: 9, nota2: 10 },
    { nome: 'Renato', nota1: 6, nota2: 5 }
];

for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome}: Média ${media}`);
}
