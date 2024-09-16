const empresa = {
    departamentos: [
        {
            nome: 'TI',
            funcionarios: ['Ana', 'Carlos']
        },
        {
            nome: 'RH',
            funcionarios: ['Maria', 'João']
        }
    ]
};

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    for (const funcionario of departamento.funcionarios) {
        console.log(`  Funcionário: ${funcionario}`);
    }
}
