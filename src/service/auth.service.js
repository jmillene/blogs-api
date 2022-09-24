const { User } = require('../models');
const generateToken = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
if (!email || !password) {
  return { type: 400, message: 'Some required fields are missing' };
}
const user = await User.findOne({
  where: { email, password },
});
if (!user) {
  return { type: 400, message: 'Invalid fields' };
}
const token = generateToken(user.DataValues);
return { token };
};
module.exports = {
  authenticate,
};