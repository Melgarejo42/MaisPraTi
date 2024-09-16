const pessoas = [
    { nome: 'Clotilde', idade: 50, cidade: 'Cidade do Mexico' },
    { nome: 'Frederico', idade: 8, cidade: 'Rio de Janeiro' },
    { nome: 'Chiquinha', idade: 10, cidade: 'Belo Horizonte' }
];

for (const pessoa of pessoas) {
    console.log(`${pessoa.nome}, ${pessoa.idade}, ${pessoa.cidade}`);
}
