const db = require('../database/models');

let usuarios = {
    list: async () => {
        let todos = await db.Persona.findAll();
        delete todos.contrasena;
        return todos;
    }
};

module.exports = {usuarios};