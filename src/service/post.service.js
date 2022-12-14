const { BlogPost, Category, PostCategory, User } = require('../models');

const createCategories = async (list) => {
  const categoriesDb = await Promise.all(
    list.map(async (id) =>
      Category.findOne({
        where: { id },
      })),
  );
  const categories = categoriesDb
    .filter((e) => e)
    .map((category) => category.dataValues);
  if (categories.length === 0) {
    return { type: 400, message: '"categoryIds" not found' };
  }
  return categories.map(({ id }) => id);
};

const createBlog = async ({ title, content, categoryIds }, { id }) => {
  if (!title || !content || !categoryIds) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  const validateCategorie = await createCategories(categoryIds);
  if (validateCategorie.type) return validateCategorie;
  const { dataValues } = await BlogPost.create({ title, content, userId: id });
  const categoriesPost = validateCategorie.map((categoryId) => ({
    postId: dataValues.id,
    categoryId,
  }));
  await PostCategory.bulkCreate(categoriesPost);
  return dataValues;
};

const getPost = async () => {
  const blogPost = BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return blogPost;
};
const blogPk = async (id) => {
const blosPk = await BlogPost.findByPk(id, {
  include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ],
});
if (blosPk === null) return { type: 404, message: 'Post does not exist' };
return blosPk;
};
module.exports = {
  createBlog,
  getPost,
  blogPk,
};
