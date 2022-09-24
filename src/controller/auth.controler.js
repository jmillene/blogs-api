const authService = require('../service/auth.service');

const auth = async (req, res) => {
  try {
    const token = await authService.authenticate(req.body);
    console.log(token);
    if (token) {
      return res.status(200).json({ token });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

module.exports = {
  auth,
};
