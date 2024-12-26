const dados = require('./dados.json'); // importa o arquivo 


function imprimirUsuarios(json){
    json.usuarios.forEach( usuario => {
        console.log(`${usuario.nome}`)
    });
}
console.log('OS clientes sao:')
imprimirUsuarios(dados);

// imprimir produtos 
function imprimirProdutos(json){
    json.produtos.forEach(produto => {
        console.log(`${produto.nome} valor ${produto.preco}`)
    })
}
console.log('OS produtos sao:') 
imprimirProdutos(dados);