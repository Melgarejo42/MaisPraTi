let objetosVendidos = [
    { produto: "Produto A", quantidade: 10, valor: 55 },
    { produto: "Produto B", quantidade: 15, valor: 20 },
    { produto: "Produto C", quantidade: 2, valor: 150 },
    { produto: "Produto D", quantidade: 60, valor: 15 }
];

let totalVendas = 0;

objetosVendidos.forEach(function(objeto) {
    totalVendas += objeto.quantidade * objeto.valor;
});

console.log(`Valor total de vendas: R$ ${totalVendas.toFixed(2)}`);
