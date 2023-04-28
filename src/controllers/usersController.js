const userServices = require('../services/userServices');
const { validationResult } = require('express-validator');

const userController = {
    signIn: async (req, res) => {
        let errors = validationResult(req);
        let signIn = await userServices.signIn(req);
        if (signIn) {
            return res.status(201).json(signIn);
        } else {
            return res.status(500).json({errors: errors.mapped()});
        }
    },
    login: async (req, res) => {
        let login = await userServices.login(req);
        if (login) {
            return res.status(201).json(login);
        } else {
            console.log(login);
            return res.status(500).json({error: "Credenciales inválidas"})
        }
    }
};

module.exports = userController;