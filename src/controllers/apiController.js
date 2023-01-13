const apiServices = require('../services/apiServices');

const apiController = {
    empresa: async (req, res) => {
        let empresa = await apiServices.empresa.total();
        res.json(empresa)
    },
    listUsuarios: async (req, res) => {
        let totalUsuarios = await apiServices.usuarios.list();
        res.json(totalUsuarios)
    },
    listProductos: async (req, res) => {
        let totalProductos = await apiServices.productos.list();
        res.json(totalProductos)
    }
};

module.exports = apiController;