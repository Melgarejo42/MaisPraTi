const prompt = require("prompt-sync")();

let carro = {
    marca: "Chevrolet",
    modelo: "Celta",
    ano: 2004,
    cor: "Prata"
}

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
}