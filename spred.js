//                         OPERADOR DE EXPALHAMENTO EM JS
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
    }]
  }

  function exibirtelefones(telefone1, telefone2){
    console.log(`Telefones: ${telefone1} e ${telefone2}`)

  }
  exibirtelefones(...estudante.telefones)

  const dadosEnvio = {
    destinatario : estudante.nome,
    ...estudante.enderecos[0]
  }
  console.log(dadosEnvio)