const estudantes = require('./estudantes.json');

function filtrarpropriedades(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

// Aqui usamos 'estudantes' no lugar de 'lista'
const lista = filtrarpropriedades(estudantes, 'cep'); 

console.log(lista);
