const { Category } = require('../models');

const categories = async ({ name }) => {
  const userCreate = await Category.create(
    { name },
  );
  return userCreate;
};
module.exports = {
  categories,
};