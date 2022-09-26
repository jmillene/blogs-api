const authService = require('../service/auth.service');

const auth = async (req, res) => {
  const token = await authService.authenticate(req.body);
  if (token.type) return res.status(token.type).json(token);
  return res.status(200).json({ token });
};
module.exports = {
  auth,
};
