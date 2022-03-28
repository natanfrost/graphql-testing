module.exports = {
  produtos: [{
      id: 123456789,
      nome: 'iPhone',
      valor: 5999.00,
      disponivel: false,
    },
    {
      id: 123456780,
      nome: 'MacBook Pro',
      valor: 15999.00,
      disponivel: true,
    },
  ],
  perfis: [{
      id: 1,
      descricao: 'ADMIN',
    },
    {
      id: 2,
      descricao: 'NORMAL',
    },
  ],
  usuarios: [{
      id: 1,
      nome: 'fulano de tal',
      salario: '12345.00',
      ativo: true,
      tecnologias: ['React', 'GraphQL'],
      perfil: 1,
    },
    {
      id: 2,
      nome: 'beltrano da silva',
      salario: '82345.00',
      ativo: false,
      tecnologias: ['Angular', 'Vue'],
      perfil: 2,
    },
  ],
};