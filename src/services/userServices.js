const db = require('../database/models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');

const metodosUsuarios = {
    signIn: async (req, res) => {

        let usuario = await db.Persona.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!usuario) {
            return await db.Persona.create({
                'nombre': req.body.nombre,
                'usuario': req.body.usuario,
                'email': req.body.email,
                'contrasena': bcrypt.hashSync(req.body.contrasena, 10),
                'direccion': req.body.direccion,
                'ciudad': req.body.ciudad,
                'provincia': req.body.provincia,
                'pais': req.body.pais,
                "piso": req.body.piso,
                'departamento': req.body.departamento,
                'imagen': req.body.imagen,
                'id_empresa': 1,
                'id_rol': 1
            })
        }
    },
    login: async (req, res) => {
        let usuario = await db.Persona.findOne({
            where: {
                email: req.body.email
            }
        });

        if (usuario && bcrypt.compareSync(req.body.contrasena, usuario.contrasena)) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000 ) + 60,
                data: usuario
            }, JWT_SECRET);
            return {usuario, token};
        }
    }
};

module.exports = metodosUsuarios;