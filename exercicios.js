// exercico 1 

// const livro = {
//     titulo : 'Vermelho branco e sangue azul',
//     autor : 'Casey Mcquiston',
//     ano : 2019,
//     genero : 'Romance'
// }

// console.log(livro);

// exercicio 2 

// let anoAtual = new Date().getFullYear()

// const livro = {
//     titulo : 'Vermelho branco e sangue azul',
//     autor : 'Casey Mcquiston',
//     ano : 2019,
//     genero : 'Romance'

// }

// livro.idadeDePublicaçao =  anoAtual - livro.ano ;

// console.log(livro);
// console.log(anoAtual);

// exercicio 3 
// let anoAtual = new Date().getFullYear()

// const livro = {
//     titulo : 'Vermelho branco e sangue azul',
//     autor : 'Casey Mcquiston',
//     ano : 2019,
//     genero : 'Romance'

// }

// livro.idadeDePublicaçao =  anoAtual - livro.ano ;

// console.log(livro.titulo);
// console.log(livro.autor);
// console.log(livro.ano);
// console.log(livro.genero);
// console.log(livro.idadeDePublicaçao);

// exercicio 4
const livro = {
    titulo : 'Vermelho branco e sangue azul',
    autor : 'Casey Mcquiston',
    ano : 2019,
    genero : 'Romance',
    AnoPubl : 5,
    avaliaçao : null
}

livro.avaliaçao = '5/5';

console.log(`o livro ${livro.titulo} esta avaliado como ${livro.avaliaçao} estrelas `)