const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
if (!email || !password) {
  return { type: 400, message: 'Some required fields are missing' };
}
const user = await User.findOne({
  where: { email, password },
});
const token = generateToken(user);
return token;
};
module.exports = {
  authenticate,
};