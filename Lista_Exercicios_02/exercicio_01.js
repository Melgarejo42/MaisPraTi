const carro = {
    marca: 'Chevrolet',
    modelo: 'Celta',
    ano: 2004,
    cor: 'prata'
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
