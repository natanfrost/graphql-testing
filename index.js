const { gql, ApolloServer } = require("apollo-server");

/**
 * Scalar types
 * Int, Float, String, Boolean, ID
 */

const resolvers = {
    Query: {
        hello() {
            return 'World';
        }
    }
}

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000);