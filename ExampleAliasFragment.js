const query = gql`ExampleAliasFragment {
    primeiroUsuario: usuarios {
      ...usuarioNomeComPerfil
    }
  
    usuarioComId: usuarios {
      id
      ...usuarioNomeComPerfil
    }
  }
  
  fragment usuarioNomeComPerfil on Usuario {
    nome 
    perfil {
      descricao
    }
  }
  `