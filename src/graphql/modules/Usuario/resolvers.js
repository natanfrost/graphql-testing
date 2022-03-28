const db = require("../../../db");


const geradorDeId = (lista) => {
    let novoId;
    let ultimo = lista[lista.length -1];
    if (!ultimo) {
        novoId = 0;
    } else {
        novoId = ultimo.id;
    }

    return ++novoId;
}

module.exports = {
    Usuario: {
        perfil(usuario) {
            return db.perfis.find(p => p.id === usuario.id);
        }
    },

    Query: {
        usuarios() {
            return db.usuarios;
        },
        usuario(_, args) {
            const {
                id,
                nome
            } = args;
            if (id) {
                return db.usuarios.find(usuario => usuario.id === id) || {};
            }
            return db.usuarios.find(usuario => usuario.nome === nome) || {};
        }
    },

    Mutation: {
        criarUsuario(_, { data }) {

            const { email } = data;

            const usuarioExistente = db.usuarios.some(u => u.email === email);

            if (usuarioExistente) {
                throw new Error(`Usuário existente: ${data.nome}`);
            }

            const novoUsuario = {
                ...data,
                id: geradorDeId(db.usuarios),
                perfil_id: 2
            }

            db.usuarios.push(novoUsuario);

            return novoUsuario;
        },

        atualizarUsuario(_,  { id, data }) {
            const usuario = db.usuarios.find(u => u.id === id);

            const indice = db.usuarios.findIndex(u => u.id === id);

            const novoUsuario = {
                ...usuario,
                ...data
            }

            db.usuarios.splice(indice, 1, novoUsuario);
            return novoUsuario;
        }
        
    }
}
