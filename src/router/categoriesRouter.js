const express = require('express');
const validaToken = require('../middleware/validaToken');
const categoriesController = require('../controller/categories.controler');
const validaNome = require('../middleware/validaName');

const router = express.Router();
router.post('/', validaToken.validaToken, validaToken.validaTokenExpirado,
validaNome.validaNome,
 categoriesController.category);
module.exports = router;