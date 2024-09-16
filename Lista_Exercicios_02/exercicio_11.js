const pedidos = [
    { cliente: 'Ana', produto: 'Produto A', quantidade: 2 },
    { cliente: 'Carlos', produto: 'Produto B', quantidade: 1 },
    { cliente: 'Ana', produto: 'Produto C', quantidade: 3 }
];

const totalPorCliente = {};
pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] = 0;
    }
    totalPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(totalPorCliente);
