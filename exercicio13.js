let carrinho = {
    itens: [
        { nome: "Shampoo", quantidade: 3, precoUnitario: 20 },
        { nome: "Condicionador", quantidade: 3, precoUnitario: 20 },
        { nome: "Creme para cabelo", quantidade: 1, precoUnitario: 30 },
        { nome: "Desodorante", quantidade: 4, precoUnitario: 15 },
        { nome: "Sabonete", quantidade: 10, precoUnitario: 5 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(function(item) {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log("Valor total do carrinho:", valorTotal);
