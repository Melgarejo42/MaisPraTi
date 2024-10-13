const carrinho = {
    itens: [
        { nome: 'Produto A', quantidade: 2, precoUnitario: 30 },
        { nome: 'Produto B', quantidade: 1, precoUnitario: 50 },
        { nome: 'Produto C', quantidade: 3, precoUnitario: 20 }
    ]
};

let totalCarrinho = 0;
carrinho.itens.forEach(item => {
    totalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${totalCarrinho}`);
