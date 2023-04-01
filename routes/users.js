var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const userController = require('../src/controllers/usersController');

const registerValidation = [
    body('nombre').notEmpty().withMessage('Debes completar este campo.'),
    body('email').notEmpty().withMessage('Debes completar el email.').isEmail().withMessage('El formato no es correcto.'),
    body('usuario').notEmpty().withMessage('Debes completar este campo.'),
    body('contrasena').notEmpty().withMessage('Debes completar este campo.'),
    body('direccion').notEmpty().withMessage('Debes completar este campo.'),
    body('ciudad').notEmpty().withMessage('Debes completar este campo.'),
    body('provincia').notEmpty().withMessage('Debes completar este campo.'),
    body('pais').notEmpty().withMessage('Debes completar este campo.'),
    body('terminos').notEmpty().withMessage('Debes aceptar los términos y condiciones.')
];

router.post('/signin', registerValidation, userController.signIn);
router.post('/login', userController.login);

module.exports = router;