const funcionarios = [
    { nome: 'Ana', cargo: 'Desenvolvedora', salario: 3500 },
    { nome: 'Carlos', cargo: 'Analista', salario: 2800 },
    { nome: 'Maria', cargo: 'Gerente', salario: 5000 }
];

const salarioMinimo = 3000;

for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`${funcionario.nome}: ${funcionario.cargo} - R$${funcionario.salario}`);
    }
}
