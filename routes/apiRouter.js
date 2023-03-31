const express = require('express');
const router = express.Router();
const apiController = require('../src/controllers/apiController');

router.get('/users/todos', apiController.empresa);
router.get('/users/list', apiController.listUsuarios);
router.get('/products/list', apiController.listProductos);
router.get('/products/category', apiController.productosCategoria);
router.get('/rol/list', apiController.listRol);

module.exports = router;