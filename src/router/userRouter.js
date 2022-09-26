const express = require('express');
const validaDisplayname = require('../middleware/validacaoUser');
const adicionaUser = require('../controller/user.controller');

const router = express.Router();
 router.post('/', validaDisplayname.validaDisplayname, 
 validaDisplayname.validaEmail,validaDisplayname.validaPassword, adicionaUser.user);

 module.exports = router;