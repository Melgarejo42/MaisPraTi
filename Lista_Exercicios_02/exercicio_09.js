const clientes = [
    { nome: 'Ana', idade: 32, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 28, cidade: 'Rio de Janeiro' },
    { nome: 'Maria', idade: 40, cidade: 'Belo Horizonte' }
];

let contador = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Clientes com mais de 30 anos: ${contador}`);
