const produtos = [
    { nome: 'Celular', preco: 1000, desconto: 0.10 },
    { nome: 'Tablet', preco: 800, desconto: 0.10 },
    { nome: 'Notebook', preco: 2000, desconto: 0.10 }
];

produtos.forEach(produto => {
    const precoComDesconto = produto.preco * (1 - produto.desconto);
    console.log(`${produto.nome}: R$${precoComDesconto}`);
});
