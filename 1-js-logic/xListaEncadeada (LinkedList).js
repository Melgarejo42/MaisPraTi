// Exercício do video 32 conceitos de Javascript - Listas ligadas (linked lists)
// https://www.youtube.com/watch?v=m8Ven1eCpbM&t=363s

class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class Lista {
    constructor() {
        this.cabeca = null;
    }

    adicionar(valor) {
        const novoNo = new No(valor);
        if(this.cabeca) === null) {
            this.cabeca = novoNo;
        } else { 
            let atual = this.cabeca;
            while(atual.proximo !== null) {
                atual = atual.proximo
            }
            atual.proximo = novoNo;
        }
    }
}