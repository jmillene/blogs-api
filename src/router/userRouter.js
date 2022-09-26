const express = require('express');
const authControler = require('../controller/auth.controler');
const validaLogin = require('../middleware/validacaoLogin');

const router = express.Router();
router.post('/', validaLogin.validaLogin, authControler.auth);
module.exports = router;