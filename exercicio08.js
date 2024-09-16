let filmes = [
    { titulo: "Matrix", diretor: "Wachowskis", anoLancamento: 1999 },
    { titulo: "John Wick", diretor: "Chad Stahelski", anoLancamento: 2014 },
    { titulo: "Velocidade Máxima", diretor: "Jan de Bont", anoLancamento: 1994 },
    { titulo: "Bill e Ted - Uma Aventura Fantástica", diretor: "Stephen Herek", anoLancamento: 1989 },
    { titulo: "Advogado do Diabo", diretor: "Taylor Hackford", anoLancamento: 1997 }
]

let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);