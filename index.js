const { gql, ApolloServer } = require("apollo-server");

/**
 * Scalar types
 * Int, Float, String, Boolean, ID
 */

const produtos = [
    {
        id: 123456789,
        nome: 'iPhone',
        valor: 5999.00,
        disponivel: false
    },
    {
        id: 123456780,
        nome: 'MacBook Pro',
        valor: 15999.00,
        disponivel: true
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'fulano de tal',
        salario: '12345.00',
        ativo: true,
        tecnologias: ['React', 'GraphQL']
    },
    {
        id: 2,
        nome: 'beltrano da silva',
        salario: '82345.00',
        ativo: false,
        tecnologias: ['Angular', 'Vue']
    }
]

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },
        produtos() {
            return produtos;
        },
        produto(_, args){
            return produtos.find(produto => produto.nome.toUpperCase().includes(args.nome.toUpperCase())) || {};
        },
        usuario(_, args) {
            const { id, nome } = args;
            if (id) {
                return usuarios.find(usuario => usuario.id === id) || {};
            }
            return usuarios.find(usuario => usuario.nome === nome) || {};
        }
    }
}

const typeDefs = gql`

    type Produto {
        id: ID
        nome: String
        valor: Float
        disponivel: Boolean
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }

    type Query {
        usuarios: [Usuario]   
        produtos: [Produto]    
        usuario(id: Int, nome: String): Usuario
        produto(nome: String): Produto
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();