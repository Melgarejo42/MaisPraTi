let empresa = {
    departamentos: [
        { nome: "Recursos Humanos", funcionarios: [ "João", "Claudio", "Van Damme" ] },
        { nome: "Financeiro", funcionarios: [ "João Paulo", "Daniel" ] },
        { nome: "Marketing", funcionarios: [ "Ludwig", "Johannes", "Antonio", "Wolfgang" ] }
    ]
};

// Iterar sobre os departamentos usando for of
for (let departamento of empresa.departamentos) {
    // Iterar sobre os funcionários de cada departamento usando for of
    for (let funcionario of departamento.funcionarios) {
        console.log(`Departamento: ${departamento.nome}, Funcionário: ${funcionario}`);
    }
}
