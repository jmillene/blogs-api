const authService = require('../service/user.service');

const user = async (req, res) => {
  try {
    const adicionaUser = await authService.adicionaUser(req.body);
    if (adicionaUser.type) {
      return res
        .status(adicionaUser.type)
        .json({ message: adicionaUser.message });
    }

    return res.status(201).json(adicionaUser);
  } catch (error) {
    console.log(error);
    res.status(500).json('deu péssimo');
  }
};
const getAllUser = async (req, res) => {
  const getUser = await authService.getAllUser();
  return res.status(200).json(getUser);
};
const findUserPk = async (req, res) => {
  try {
    const { id } = req.params;
    const usersPk = await authService.findPkUser(id);
    console.log(req.user);
  return res.status(usersPk.type).json(usersPk.message);
  } catch (error) {
    console.log(error);
    return res.status(error.type).json({
      message: error.message,
    });
  }
};
module.exports = {
  user,
  getAllUser,
  findUserPk,
};
