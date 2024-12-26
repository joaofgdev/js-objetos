const estudante = require('./estudante.json');

// converser em string

const stringEstudante = JSON.stringify(estudante);
console.log(estudante);

// voltar para objeto 
const objetoEstudante = JSON.parse(stringEstudante);
console.log(objetoEstudante)