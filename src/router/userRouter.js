const express = require('express');
const validaDisplayname = require('../middleware/validacaoUser');
const validaToken = require('../middleware/validaToken');
const adicionaUser = require('../controller/user.controller');

const router = express.Router();
router.post(
  '/',
  validaDisplayname.validaDisplayname,
  validaDisplayname.validaEmail,
  validaDisplayname.validaPassword,
  adicionaUser.user,
);
router.get('/', validaToken.validaToken, 
validaToken.validaTokenExpirado, 
adicionaUser.getAllUser);

router.get('/:id', validaToken.validaToken,
validaToken.validaTokenExpirado, adicionaUser.findUserPk);
module.exports = router;
