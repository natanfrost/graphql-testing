const db = require("../../../db");

module.exports = {
    Query: {
        produtos() {
            return db.produtos;
        },
        produto(_, args){
            return db.produtos.find(produto => produto.nome.toUpperCase().includes(args.nome.toUpperCase())) || {};
        }
    }
}