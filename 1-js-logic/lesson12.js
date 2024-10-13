// Objetos

let serie = {
    nome: "The Boys",
    genero: "Ação, paródia, heróis",
    nrTemporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50
    },

    mostrarCaracteristicas: function() {
        return `O nome da série é: ${this.nome} e sua classificação é +${this.classificacao}`
    }
}

console.log(serie.mostrarCaracteristicas())


let livro = {
    nome: "Mar sem fim",
    autor: "Klink, Amyr",
    genero: "Autobiografia",
    paginas: 308,
    lançamento: 11/04/2000,
}

let carro = {
    nome: "Celta",
    montadora: "Chevrolet",
    cilindros: "1.4",
    combustivel: "Gasolina",
    aroRodas: 13,
    anoFabricacao: 2004,
    anoModelo: 2005,
    mostrarCaracteristicas: function () {
        return `O nome do carro é ${this.nome} e o ano de fabricação é ${this.anoFabricacao}.`
    }
};

console.log(carro.mostrarCaracteristicas)

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate street",
    idade: 16
}

// Adicionar atributos ao objeto

atleta.nacionalidade = 'Brasil'
atleta.medalhas = {
    ouro: 10,
    prata: 1,
    bronze: 1
}

atleta.celebrarVitoria = function () { return "GANHEI!" }

console.log(atleta)
console.log(atleta.CelebrarVitoria())

let obj1 = {
    nome: "Bruce",
    profissao: "Batman"
}

let obj2 = obj1

function computador(processador, gpu, ram, armazenamento) {
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function () {
        console.log(`O ${this.processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function() {
        return `
            processador ${this.processador}
            gpu: ${this.gpu}
            ram: ${this.ram}
            armazenamento: ${this.armazenamento}`
    }
}

let pc = new computador ("i9", "RTX4090", "16GB", "500GB SSD")
console.log(pc.mostrarEspecificacoes())

// Design patterns
// Um dos design patterns famosos é o de "factory", por exemplo:

function jogos(titulo, genero, anoLancamento, empresa, jogar) {
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos('Final Fantasy', 'RPG', '1997', 'Square Soft', () => console.log('Jogando'))

// console.log(jogo1.jogar())

// Estruturas de repetição: for in, for of, forEach (especificas para iterar sobre arrays e objetos)
// 

for(let key in jogo1) {
    console.log(`${key}: ${jogo1[key]}`)
}

const jogadores = ['Pelé', 'CR7', 'Messi']

for(let jogador of jogadores) {
    console.log(jogadores)
}