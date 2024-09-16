const vendas = [
    { produto: 'Produto A', quantidade: 10, valor: 20 },
    { produto: 'Produto B', quantidade: 5, valor: 50 },
    { produto: 'Produto C', quantidade: 2, valor: 100 }
];

let totalVendas = 0;
vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$${totalVendas}`);
