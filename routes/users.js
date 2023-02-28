var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/usersController');

router.post('/singin', userController.singIn);
router.post('/login', userController.login);

module.exports = router;