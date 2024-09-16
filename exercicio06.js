let funcionarios = [
    { nome: "Adão", cargo: "Analista Administrativo", salario: 1000 },
    { nome: "Bernardo", cargo: "Analista de Business Strategy", salario: 2000 },
    { nome: "Carlos", cargo: "Analista de Compras", salario: 3000 },
    { nome: "Diego", cargo: "Analista de Desenvolvimento", salario: 4000 },
    { nome: "Erasmo", cargo: "Analista de Estatísticas", salario: 5000 },
]

for (funcionario of funcionarios) {
    if (funcionario.salario > 2000) {
        console.log(`nome: ${funcionario.nome}, cargo: ${funcionario.cargo}, salário: ${funcionario.salario}`)
    }
}