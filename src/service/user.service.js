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

module.exports = {
  adicionaUser,
};