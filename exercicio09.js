let clientes = [
    { nome: "Chaves", idade: 8, cidade: "Cidade do México" },
    { nome: "Seu Madruga", idade: 45, cidade: "Cidade do México" },
    { nome: "Clotilde", idade: 42, cidade: "Cidade do México" },
    { nome: "Florinda", idade: 39, cidade: "Cidade do México" },
    { nome: "Chiquinha", idade: 10, cidade: "Cidade do México" },
    { nome: "Quico", idade: 8, cidade: "Cidade do México" }
];

let contagemMaisDeTrinta = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contagemMaisDeTrinta++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contagemMaisDeTrinta}`);