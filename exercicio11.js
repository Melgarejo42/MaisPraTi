let pedidos = [
    { produto: "Palito de dentes", quantidade: 100, cliente: "João" },
    { produto: "Mochila", quantidade: 15, cliente: "Claudio" },
    { produto: "Desodorante", quantidade: 5, cliente: "José" },
    { produto: "Escova de cabelo", quantidade: 1, cliente: "Nazaré" }
];

let totalPorCliente = {};

pedidos.forEach(function(pedido) {
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        totalPorCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log("Total de produtos por cliente:", totalPorCliente);
