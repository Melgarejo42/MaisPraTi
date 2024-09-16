let transacoes = [
    { transacao: "Entrada", valor: 200 },
    { transacao: "Entrada", valor: 300 },
    { transacao: "Saída", valor: 1500 },
    { transacao: "Entrada", valor: 700 },
    { transacao: "Saída", valor: 500 },
    { transacao: "Saída", valor: 100 }
];

let saldo = 0;

transacoes.forEach(function(transacao) {
    if (transacao.transacao === "Entrada") {
        saldo += transacao.valor;
    } else if (transacao.transacao === "Saída") {
        saldo -= transacao.valor;
    }
});

console.log("Saldo final:", saldo);
