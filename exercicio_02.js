const livro = {
    titulo: 'O Senhor dos Aneis',
    autor: 'J. R. R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
};

if (!('editora' in livro)) {
    livro.editora = 'Any Publish';
}

console.log(livro);
