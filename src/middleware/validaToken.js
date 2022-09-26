const jwt = require('jsonwebtoken');
require('dotenv');

const validaToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  next();
};
const validaTokenExpirado = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const SECRET_KEY = process.env.JWT_SECRET;
     jwt.verify(authorization, SECRET_KEY);
      next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};
module.exports = {
  validaToken,
  validaTokenExpirado,
};
