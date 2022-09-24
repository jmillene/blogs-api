require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (id, displayName, image) => {
  const payload = {
    id, displayName, image,
  };
  const jwtConfig = {
    expiresIn: '40m',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};
module.exports = {
  generateToken,
};