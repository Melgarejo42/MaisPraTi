const prompt = require("prompt-sync")();

let objeto = {
    propriedade1: 10,
    propriedade2: 25,
    propriedade3: 2024,
    propriedade4: 89.99,
    propriedade5: 580,
    propriedade6: 380,
    propriedade7: 12,
    propriedade8: 125,
    propriedade9: 340,
    propriedade10: 690
}

function filtrarPropriedades(obj, valorMinimo) {
    let novoObjeto = {};

    for (let propriedade in obj) {
        if (obj[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = obj[propriedade];
        }
    }

    return novoObjeto;
}

let valorMinimo = parseFloat(prompt("Insira um valor para a filtragem: "));
let objetoFiltrado = filtrarPropriedades(objeto, valorMinimo);

console.log("Objeto filtrado:", objetoFiltrado);
