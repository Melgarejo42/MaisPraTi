const estoque = [
    { produto: 'Produto A', quantidade: 5, minimo: 10 },
    { produto: 'Produto B', quantidade: 15, minimo: 10 },
    { produto: 'Produto C', quantidade: 3, minimo: 10 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);
