const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
const user = await User.findOne({
  attributes: ['id', 'email', 'displayName'],
  where: { email, password },
});
if (!user) {
  console.log(user);
  return { type: 400, message: 'Invalid fields' };
}
const token = generateToken(user);
return token;
};

module.exports = {
  authenticate,
};