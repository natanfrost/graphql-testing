const query = `DirectivesVariables($usuarioId: Int, $showSalary: Boolean!, $mostraAtivo: Boolean!) {
    usuario(id: $usuarioId) {
      nome
      ativo @skip(if: $mostraAtivo)
      salario @include(if: $showSalary)
    }
}
  `

const variables = `
{
  "usuarioId": 1,
  "showSalary": true,
  "mostraAtivo": false
}
`