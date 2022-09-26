const jwt = require('jsonwebtoken');
require('dotenv');

const validaToken = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
};
const validaTokenExpirado = (req, res) => {
  const { token } = req.body;
  const SECRET_KEY = process.env.JWT_SECRET;
  if (!SECRET_KEY) {
    return res.status(401).json('teste');
  }
  if (token) {
    jwt.verify(token, SECRET_KEY);
    console.log(token);
    return res.status.json(200).json({ token });
  }
  return res.status(401).json({
    message: 'Expired or invalid token',
  });
};
module.exports = {
  validaToken,
  validaTokenExpirado,
};
