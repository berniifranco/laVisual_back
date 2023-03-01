const userServices = require('../services/userServices');

const userController = {
    signIn: async (req, res) => {
        let signIn = await userServices.signIn(req);
        if (signIn) {
            return res.status(201).json(signIn);
        } else {
            return res.status(500).json({error: "Este usuario ya se encuentra registrado"});
        }
    },
    login: async (req, res) => {
        let login = await userServices.login(req);
        if (login) {
            return res.status(201).json(login);
        } else {
            return res.status(500).json({error: "Credenciales inválidas"})
        }
    }
};

module.exports = userController;