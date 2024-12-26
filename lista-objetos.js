const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefone : ["234567865", '56743383292'],
    endereco : [{
        rua: 'Rua do Bairro',
        numero: '123',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '12345678'
     }]
  }

estudante.endereco.push({
    rua: 'Rua do Bairro',
    numero: '123',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '12345678'
});

console.log(estudante.endereco);
console.log(estudante.endereco[1]);