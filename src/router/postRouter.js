const express = require('express');
const validaToken = require('../middleware/validaToken');
const postController = require('../controller/post.controller');

const router = express.Router();
router.post('/', validaToken.validaToken, validaToken.validaTokenExpirado,
 postController.blog);
 router.get('/', validaToken.validaToken, validaToken.validaTokenExpirado,
 postController.blosPost);
module.exports = router;
