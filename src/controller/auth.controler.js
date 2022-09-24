const authService = require('../service/auth.service');

const auth = async (req, res) => {
  const token = await authService.authenticate(req.body);
  if (token) {
    return res.status(200).json({ token });
}
  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  auth,
};