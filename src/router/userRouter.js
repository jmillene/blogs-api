const express = require('express');
const authControler = require('../controller/auth.controler');

const router = express.Router();
router.post('/', authControler.auth);
module.exports = router;