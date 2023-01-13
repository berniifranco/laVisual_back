const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users/todos', apiController.empresa);
router.get('/users/list', apiController.listUsuarios);
router.get('/products/list', apiController.listProductos);

module.exports = router;