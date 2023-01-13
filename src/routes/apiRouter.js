const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/list', apiController.list);

module.exports = router;