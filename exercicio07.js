let produtos = [
    {nome: "Barril", preco: 300, desconto: 0 },
    {nome: "Vassoura para voar", preco: 8001, desconto: 0 },
    {nome: "Lata de tinta", preco: 80, desconto: 0 },
    {nome: "Muda de chirimoia", preco: 30, desconto: 0 },
    {nome: "Bola quadrada", preco: 40, desconto: 0 },
]

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;
    let precoComDesconto = produto.preco - produto.desconto;

    console.log(`Nome: ${produto.nome}, Preço Original: ${produto.preco}, Preço com Desconto: ${precoComDesconto.toFixed(2)}`);
});