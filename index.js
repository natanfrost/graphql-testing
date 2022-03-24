const { gql, ApolloServer } = require("apollo-server");

/**
 * Scalar types
 * Int, Float, String, Boolean, ID
 */

const resolvers = {
    Query: {
        idade() {
            return 18;
        },
        salario() {
            return 1234.00;
        },
        nome() {
            return 'Fulano de Tal';
        },
        ativo() {
            return true;
        },
        id() {
            return 123465789;
        }
    }
}

const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000);