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
    },
    productosCategoria: async (req, res) => {
        let productosCategory = await apiServices.productos.productsCategory();
        res.json(productosCategory);
    },
    listRol: async (req, res) => {
        let rol = await apiServices.rol.list();
        res.json(rol);
    }
};

module.exports = apiController;