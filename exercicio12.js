let estoque = [
    { produto: "Caneta", quantidade: 50, minimo: 80 },
    { produto: "Lápis", quantidade: 15, minimo: 30 },
    { produto: "Borracha", quantidade: 100, minimo: 50 },
    { produto: "Apontador", quantidade: 20, minimo: 30 }
];

estoque.forEach(function(item) {
    // Verificar se a quantidade do produto é menor que o mínimo
    if (item.quantidade < item.minimo) {
        // Atualizar a quantidade do produto, duplicando-a
        item.quantidade *= 2;
    }
});

console.log("Estoque atualizado:", estoque);
