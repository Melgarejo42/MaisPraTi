const prompt = require("prompt-sync")();

let livro = {
    titulo: "O Senhor dos Aneis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
}

let editoraExiste = false;

for (let propriedade in livro) {
    if (propriedade === "editora") {
        editoraExiste = true;
        break;
    }
}

if (!editoraExiste) {
    livro.editora = "Desconhecida";
}

console.log(livro);
