const prompt = require("prompt-sync")();

let pessoas = [
    { nome: "Charlinho", idade: 10, cidade: "Jarangonhonha" },
    { nome: "Hermes", idade: 45, cidade: "Santa Rosa Del Pipoco" },
    { nome: "Renato", idade: 40, cidade: "Araxinoca"}
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}