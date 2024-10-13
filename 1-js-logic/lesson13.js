/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 6.0 como média).
*/

const professor = {
    name: "John",
    subject: "Programming",
    grades: {
        student1: 10.0,
        student2: 6.0,
        student3: 3.0,
        student4: 8.0,
        student5: 6.0,
        student6: 7.0,
        student7: 8.0
    }
};

let sumGrades = 0
let numberOfStudents = 0

for (let student in professor.grades){
    sumGrades += professor.grades[student]
    numberOfStudents++
}

let average = sumGrades / numberOfStudents

console.log(`A nota média da turma é: ${average.toFixed(2)}`)
console.log(average >= 6
    ? `${professor.name} está acima da média.`
    : `${professor.name} está abaixo da média.`
)



/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e ano dos livros que atendem a essa condição.
*/

const library = [
    { title: 'Harry Potter', year: 2000 },
    { title: 'LOTR', year: 1954 },
    { title: 'Hitchhiker', year: 1979 },
    { title: 'Matrix', year: 1999 }
];

for (const book of library) {
    if (book.year < 2000) {
        console.log(`Title: ${book.title}, Year: ${book.year}`);
    }
}

/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método for...each para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem.
    Se existir, incremente a contagem. Se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const movies = [
    { title: 'Comedy1', genre: 'COMEDY' },
    { title: 'Movie1', genre: 'COMEDY' },
    { title: 'Filminho', genre: 'ACTION' },
    { title: 'Filmao', genre: 'ACTION' },
    { title: 'Suspense', genre: 'THRILLER' }
];

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount) {
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
}