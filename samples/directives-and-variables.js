const query = `DirectivesVariables($usuarioId: Int, $showSalary: Boolean!, $pulaAtivo: Boolean!) {
    usuario(id: $usuarioId) {
      nome
      ativo @skip(if: $pulaAtivo)
      salario @include(if: $showSalary)
    }
}
  `

const variables = `
{
  "usuarioId": 1,
  "showSalary": true,
  "pulaAtivo": false
}
`