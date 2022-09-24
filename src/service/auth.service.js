const { User } = require('../models');
const generateToken = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
if (!email || password) {
  const status = 400;
  const message = 'Some required fields are missing';
  throw { status, message };
}
const user = await User.findOne({
  attributes: ['id', 'displayName', 'image'],
  where: { email, password },
});
if (!user) {
  const status = 400;
  const message = 'Some required fields are missing';
  throw { status, message };
}
const token = generateToken(user.DataValues);
return { token };
};
module.exports = {
  authenticate,
};