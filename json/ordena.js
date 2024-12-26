const estudantes = require('./estudantes.json');

function listaOrdena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    });
}

// Chamada correta da função
const listaOrdenada = listaOrdena(estudantes, "nome");
console.log(listaOrdenada);


