const apiServices = require('../services/apiServices');

const apiController = {
    list: async (req, res) => {
        let totalUsuarios = await apiServices.usuarios.list();
        res.json(totalUsuarios)
    }
};

module.exports = apiController;