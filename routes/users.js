var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/usersController');

router.post('/signin', userController.signIn);
router.post('/login', userController.login);

module.exports = router;