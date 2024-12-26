const estudante = {
    nome : "Joao Carlos",
    idade : 18,
    cpf: 1234567,
    turma: "Javascripty"
}

function exibeInfoestudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoestudante(estudante, 'nome'));
console.log(exibeInfoestudante(estudante, 'idade'));
console.log(exibeInfoestudante(estudante, 'cpf'));

estudante.telefone = "46991064567";
console.log(estudante);