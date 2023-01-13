const db = require('../database/models');

let empresa = {
    total: async () => {
        let total = await db.Empresa.findAll({include: [{association: 'personas'}]})
        return total;
    }
};

let usuarios = {
    list: async () => {
        let todos = await db.Persona.findAll({include: [{association: 'empresa'}, {association: 'rol'}, {association: 'productos'}, {association: 'carritos'}]});
        delete todos.contrasena;
        return todos;
    }
};

let productos = {
    list: async () => {
        let todos = await db.Producto.findAll({include: [{association: 'categoria'}, {association: 'persona'}]})
        return todos;
    },
    productsCategory: async () => {
        let productosCategory = await db.Categoria.findAll({include: [{association: 'productos'}]});
        return productosCategory;
    }
};

let rol = {
    list: async () => {
        let todos = await db.Rol.findAll({include: [{association: 'personas'}]});
        return todos;
    }
}

module.exports = {usuarios, productos, empresa, rol};