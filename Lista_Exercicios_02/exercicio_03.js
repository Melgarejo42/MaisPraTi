const produto = {
    nome: 'Notebook',
    preco: 1500,
    peso: 2,
    garantia: 1
};

function filtrarPropriedades(obj, valorMinimo) {
    const resultado = {};
    for (let chave in obj) {
        if (obj[chave] > valorMinimo) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

console.log(filtrarPropriedades(produto, 1));
