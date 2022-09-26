const authService = require('../service/user.service');

const user = async (req, res) => {
  try {
    const adicionaUser = await authService.adicionaUser(req.body);
  if (adicionaUser.type) {
    return res.status(adicionaUser.type).json({ message: adicionaUser.message });
  }
  return res.status(201).json(adicionaUser);
  } catch (error) {
    console.log(error);
    res.status(500).json('deu péssimo');
  }
};
module.exports = {
  user,
};