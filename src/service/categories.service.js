const { Category } = require('../models');

const categories = async ({ name }) => {
  const userCreate = await Category.create(
    { name },
  );
  return userCreate;
};

const categoriesAll = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};
module.exports = {
  categories,
  categoriesAll,
};