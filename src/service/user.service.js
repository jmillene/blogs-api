const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const adicionaUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({
    where: { email },
  });
  // console.log(user);
  if (user !== null) return { type: 409, message: 'User already registered' };

  const userCreate = await User.create(
    { displayName, email, password, image },
 );
 const token = generateToken(userCreate.dataValues);
return { token };
};
const getAllUser = async () => {
  const users = await User.findAll(
    { 
      attributes: ['id', 'displayName', 'email', 'image'],
  },
);
  return users;
};
const findPkUser = async (id) => {
  const findUser = await User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
});
if (findUser === null) {
const error = new Error('User does not exist');
error.type = 404;
throw error;
}
return { type: 200, message: findUser };
};

module.exports = {
  adicionaUser,
  getAllUser,
  findPkUser,
};